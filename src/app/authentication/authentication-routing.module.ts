import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user/user.component';
import { AuthenticationComponent } from './authentication.component';
import { RegistrationComponent } from './registration/registration.component';



const routes: Routes = [{ path: '', component: RegistrationComponent }, 

 {path:'user',component:UserComponent},
 { path: 'registration', component: RegistrationComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
