import { Pipe, PipeTransform } from '@angular/core';
import {setAnalyticsConfig} from "@angular/cli/models/analytics";

@Pipe({
  name: 'filtering',
  pure:true
})
export class FilteringPipe implements PipeTransform {
 returnString : any[] = []
  transform(dataList: any[], searchTerm: string, serchField:string) {

   console.log("search field: ", searchTerm, " searchField: ", serchField)
    if(!dataList || !searchTerm){
      return dataList;
    }


        this.returnString= dataList.filter(dataList =>
          dataList.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);



    return this.returnString;

  }

}
