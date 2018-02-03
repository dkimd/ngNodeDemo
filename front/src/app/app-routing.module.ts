import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebMailComponent } from './web-mail/web-mail.component';
import { AboutComponent } from './about/about.component';
import { CanDeactivateGuard } from './service/can-deactivate-guard.service';

const routes: Routes = [
  { path: 'email', component: WebMailComponent, canDeactivate: [CanDeactivateGuard] },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CanDeactivateGuard]
})
export class AppRoutingModule {}
