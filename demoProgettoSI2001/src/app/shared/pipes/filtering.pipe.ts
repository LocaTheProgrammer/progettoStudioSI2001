import { Pipe, PipeTransform } from '@angular/core';
import {setAnalyticsConfig} from "@angular/cli/models/analytics";

@Pipe({
  name: 'filtering',
  pure:true
})
export class FilteringPipe implements PipeTransform {

  transform(dataList: any[], searchTerm: string, searchField:string) {

  if(!dataList || !searchTerm){
      return dataList;
    }


      return dataList.filter(dataList =>
          dataList[searchField].toString().toLowerCase().indexOf(searchTerm.toLowerCase()) != -1);

  }

}
