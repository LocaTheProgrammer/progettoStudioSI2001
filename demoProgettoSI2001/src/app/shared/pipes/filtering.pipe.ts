import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering',
  pure:true
})
export class FilteringPipe implements PipeTransform {

  transform(dataList: any[], searchTerm: string) {
    if(!dataList || !searchTerm){
      return dataList;
    }
    return dataList.filter(dataList =>
      dataList.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);

  }

}
