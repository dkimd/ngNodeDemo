import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebMailComponent } from './web-mail/web-mail.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'email', component: WebMailComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
