import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalpopRoutingModule } from './modalpop-routing.module';
import { ModalpopComponent } from './modalpop.component';


@NgModule({
  declarations: [
    ModalpopComponent
  ],
  imports: [
    CommonModule,
    ModalpopRoutingModule
  ]
})
export class ModalpopModule { }
