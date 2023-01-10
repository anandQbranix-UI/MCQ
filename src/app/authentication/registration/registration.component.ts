import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor(
    private readonly router:Router
  ){

  }

  requestTest(){
    this.router.navigate(['/modalpop']);
  }




}

