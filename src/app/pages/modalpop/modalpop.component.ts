import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modalpop',
  templateUrl: './modalpop.component.html',
  styleUrls: ['./modalpop.component.css']
})
export class ModalpopComponent {
 
  ngOnInit(): void {

  }
  
  constructor(
    private readonly router:Router
  ){

  }
  closepopup(){
    this.router.navigate(['/timer']);
  }


}





  

