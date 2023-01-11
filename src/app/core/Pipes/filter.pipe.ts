import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchfilter: string) {
    let results: any = [];

    if (!searchfilter) return value;
    if (value && value.length) {
      value.forEach((v: any) => {
        let temp = v['skillSeekerProjectName'].toUpperCase();
        let temp1 = v['skillSeekerProjectDept'].toUpperCase();

        searchfilter = searchfilter.toUpperCase();

        if (temp.includes(searchfilter) || temp1.includes(searchfilter)) results.push(v);
      });
      return results;
    }
  }
}

@Pipe({
  name: 'search',
  pure: true,
})
export class SearchPipe implements PipeTransform {
  transform(value: any, search: any) {
    let results1: any = [];

    if (!search) return value;
    if (value && value.length) {
      value.forEach((v: any) => {
        let temp = v['skillSeekerProjectName'].toUpperCase();

        search = search.toUpperCase();

        if (temp.includes(search)) results1.push(v);
      });
      return results1;
    }
  }
}
