import { Pipe, PipeTransform } from '@angular/core';
import {setAnalyticsConfig} from "@angular/cli/models/analytics";

@Pipe({
  name: 'filtering',
  pure:true
})
export class FilteringPipe implements PipeTransform {
 returnString : any[] = []
  logFIlteringPipe:string="[Filtering Pipe] ";
  transform(dataList: any[], searchTerm: string, serchField:string) {

   console.log(this.logFIlteringPipe, "search term: ", searchTerm, " searchField: ", serchField)
    if(!dataList || !searchTerm){
      return dataList;
    }


      return dataList.filter(dataList =>
          dataList[serchField].toLowerCase().indexOf(searchTerm.toLowerCase()) != -1);





  }

}
