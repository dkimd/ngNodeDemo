import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { EmailService } from './service/email.service';

import { AppComponent } from './app.component';
import { WebMailComponent } from './web-mail/web-mail.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    WebMailComponent,
    AboutComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
