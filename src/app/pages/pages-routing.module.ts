import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [ 
  { path: 'modalpop', loadChildren: () => import('../modalpop/modalpop.module').then(m => m.ModalpopModule) },
  { path: 'timer', loadChildren: () => import('../timer/timer.module').then(m => m.TimerModule) },
  { path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
{ path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) },
{ path: '', loadChildren: () => import('../authentication/authentication.module').then(m => m.AuthenticationModule) },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
