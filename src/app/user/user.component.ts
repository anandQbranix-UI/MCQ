import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  step : number = 1;
  
  constructor() {

  }

  ngOnInit(): void {

  }
  next(i:number): void {
    this.step = i;
    

  }

}



