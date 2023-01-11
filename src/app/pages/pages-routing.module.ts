import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../pages/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'modalpop',
        loadChildren: () =>
          import('../pages/modalpop/modalpop.module').then(
            (m) => m.ModalpopModule
          ),
      },
      {
        path: 'timer',
        loadChildren: () =>
          import('../pages/timer/timer.module').then((m) => m.TimerModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('../pages/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../pages/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
