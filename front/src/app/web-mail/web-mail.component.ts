import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { Email } from '../service/email';
import { multipleEmailValidator } from '../shared/multiple-email.directive';

@Component({
  selector: 'app-web-mail',
  templateUrl: './web-mail.component.html',
  styleUrls: ['./web-mail.component.scss']
})
export class WebMailComponent implements OnInit {
  emailForm: FormGroup;
  email: Email;
  msg: string;
  regex = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},?){1,6}$/;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
  ) {
    this.createForm();
  }

  ngOnInit() {}

  createForm() {
    this.emailForm = this.fb.group({
      sender: [''],
      recipients: [''],
      cc: [''],
      bcc: [''],
      // recipients: ['', [Validators.required, multipleEmailValidator(this.regex)]],
      // cc: ['', [multipleEmailValidator(this.regex)]],
      // bcc: ['', [multipleEmailValidator(this.regex)]],
      subject: [''],
      contents: ['']
    });
  }

  save() {
    this.email = this.copyFormtoSave();
    this.emailService
      .save(this.email)
      .subscribe(
        result => (this.msg = result),
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
}
