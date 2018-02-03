import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { EmailService } from './service/email.service';
import { DialogService } from './service/dialog.service';

import { AppComponent } from './app.component';
import { WebMailComponent } from './web-mail/web-mail.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForbiddenValidatorDirective } from './shared/multiple-email.directive';

@NgModule({
  declarations: [
    AppComponent,
    WebMailComponent,
    AboutComponent,
    NavbarComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    EmailService,
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
