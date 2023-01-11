import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalPipe } from './Pipes/total.pipe';

const DIRECTIVES: Array<any> = [];

const PIPES: Array<any> = [TotalPipe];

@NgModule({
  declarations: [...DIRECTIVES, ...PIPES],
  imports: [CommonModule],
  exports: [...DIRECTIVES, ...PIPES],
})
export class CoreModule {}
