import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { EmailService } from '../service/email.service';
import { Email } from '../service/email';
import { multipleEmailValidator } from '../shared/multiple-email.directive';
import { DialogService } from '../service/dialog.service';

import { Directionality } from '@angular/cdk/bidi';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material';

// import {ErrorStateMatcher} from '@angular/material';

@Component({
  selector: 'app-web-mail',
  templateUrl: './web-mail.component.html',
  styleUrls: ['./web-mail.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WebMailComponent implements OnInit, AfterViewInit {
  emailForm: FormGroup;
  email: Email;
  msg: string;
  regex = /^([\w+-.%]+@[\w-.]+\.[A-Za-z]{2,4},?){1,6}$/;
  isChanged = false;
  isSubmitted = false;

  actionButtonLabel = 'Retry';
  action = false;
  setAutoHide = true;
  autoHide = 10000;
  addExtraClass = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    public dialogService: DialogService,
    public snackBar: MatSnackBar,
    private dir: Directionality
  ) {
    this.createForm();
  }

  ngOnInit() {}

  ngAfterViewInit() {
    Observable.merge(this.emailForm.valueChanges).subscribe(d => {
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
    this.openMessage('EMail Sending');
    this.emailService.save(this.email).subscribe(
      result => {
        this.isChanged = false;
        this.isSubmitted = false;
        this.msg = result;

        if (result.success) {
          this.openMessage('Email Qued to Providers');
        } else {
          this.openMessage('Email Que Failed. Please Try Again!');
        }
      }
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

  openMessage(message) {
    let config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.setAutoHide ? this.autoHide : 0;
    config.direction = this.dir.value;

    this.snackBar.open(
      message,
      this.action ? this.actionButtonLabel : undefined,
      config
    );
  }
}
