import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent {

  ngOnInit(): void {

  }
  
  constructor(
    private readonly router:Router
  ){

  }
  closepopup(){
    this.router.navigate(['/user']);
  }


}





  

