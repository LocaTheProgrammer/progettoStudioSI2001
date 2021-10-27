import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

    transform(dataList: any[], visibleElements: string) {
    console.log("visible elements: "+visibleElements)
      if(visibleElements=='0'||visibleElements==undefined||visibleElements==""){
        visibleElements=dataList.length.toString();
      }
    return dataList.slice(0,+visibleElements);
  }

}
