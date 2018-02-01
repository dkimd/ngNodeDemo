import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmailService } from '../service/email.service';
import { Email } from '../service/email';

@Component({
  selector: 'app-web-mail',
  templateUrl: './web-mail.component.html',
  styleUrls: ['./web-mail.component.scss']
})
export class WebMailComponent implements OnInit {
  emailForm: FormGroup;
  email: Email;
  msg: string;

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
        error => (this.msg =<any>error)
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
