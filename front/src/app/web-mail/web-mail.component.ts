import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmailService } from '../service/email.service';
import { Email } from '../service/email';
import { multipleEmailValidator } from '../shared/multiple-email.directive';
import { DialogService } from '../service/dialog.service';

@Component({
  selector: 'app-web-mail',
  templateUrl: './web-mail.component.html',
  styleUrls: ['./web-mail.component.scss']
})
export class WebMailComponent implements OnInit, AfterViewInit {
  emailForm: FormGroup;
  email: Email;
  msg: string;
  regex = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},?){1,6}$/;
  isChanged = false;
  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    public dialogService: DialogService
  ) {
    this.createForm();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    Observable.merge(
      this.emailForm.valueChanges
    ).subscribe(d => {
      this.isChanged = true;
    });
  }

  createForm() {
    this.emailForm = this.fb.group({
      sender: [''],
      recipients: [
        '',
        [Validators.required, multipleEmailValidator(this.regex)]
      ],
      cc: ['', [multipleEmailValidator(this.regex)]],
      bcc: ['', [multipleEmailValidator(this.regex)]],
      subject: ['', [Validators.required]],
      contents: ['', [Validators.required]]
    });
  }

  save() {
    if (!this.emailForm.valid || this.isSubmitted) {
      return true;
    }
    this.isSubmitted = true;
    this.email = this.copyFormtoSave();
    this.emailService.save(this.email).subscribe(
      result => {
        this.isChanged = false;
        this.isSubmitted = false;
        this.msg = result;
        console.log(this.msg);
      }
      // error => (this.msg =<any>error)
    );
  }

  copyFormtoSave(): Email {
    const formModel = this.emailForm.value;

    const saveEmail: Email = {
      sender: formModel.sender,
      recipients: formModel.recipients,
      cc: formModel.cc,
      bcc: formModel.bcc,
      subject: formModel.subject,
      contents: formModel.contents
    };

    return saveEmail;
  }

  clear() {
    this.emailForm.reset();
    this.isChanged = false;
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.isChanged) {
      return true;
    }
    return this.dialogService.confirm('Discard changes?');
  }
}
