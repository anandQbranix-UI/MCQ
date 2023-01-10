import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { RegistrationComponent } from './registration/registration.component';



@NgModule({
  declarations: [
    AuthenticationComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
   
  ]
})
export class AuthenticationModule { }
