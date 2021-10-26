import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering',
  pure:true
})
export class FilteringPipe implements PipeTransform {

  transform(list: any[], filters: Object) {
    // @ts-ignore
    const keys = Object.keys(filters).filter(key => filters[key]);
    // @ts-ignore
    const filterUser = user => keys.every(key => user[key] === filters[key]);

    return keys.length ? list.filter(filterUser) : list;
  }

}
