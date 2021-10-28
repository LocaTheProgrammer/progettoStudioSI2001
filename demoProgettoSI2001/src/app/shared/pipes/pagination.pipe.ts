import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
    transform(dataList: any[], visibleElements: number, startPage:number) {

      if(dataList && (visibleElements==0||visibleElements==undefined)){
        visibleElements=dataList.length
      }

    return dataList ? dataList.slice(startPage*visibleElements, (startPage*visibleElements)+(visibleElements)) : [];
  }

}
