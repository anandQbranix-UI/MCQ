import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customFilter1',
})
export class customSearchPipe1 implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal1 =
        val.jobId.toLocaleLowerCase().includes(args) ||
        val.jobId.includes(args) ||
        val.location.toLocaleLowerCase().includes(args) ||
        val.location.includes(args);
      return rVal1;
    });
  }
}

@Pipe({
  name: 'customFilter2',
})
export class customSearchPipe2 implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal1 =
        val.jobId.toLocaleLowerCase().includes(args) ||
        val.jobId.includes(args) ||
        val.location.toLocaleLowerCase().includes(args) ||
        val.location.includes(args) ||
        val.jobTitle.toLocaleLowerCase().includes(args) ||
        val.jobTitle.includes(args);
      return rVal1;
    });
  }
}
