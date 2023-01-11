import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalpopComponent } from './modalpop.component';

const routes: Routes = [{ path: '', component: ModalpopComponent }, { path: 'modalpop', loadChildren: () => import('../timer/timer.module').then(m => m.TimerModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModalpopRoutingModule { }
