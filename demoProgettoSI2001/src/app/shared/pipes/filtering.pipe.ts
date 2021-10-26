import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtering',
  pure:true
})
export class FilteringPipe implements PipeTransform {
 returnString : any[] = []
  transform(dataList: any[], searchTerm: string, serchField:string) {
    if(!dataList || !searchTerm){
      return dataList;
    }

    switch (serchField){
      case 'nome':
        this.returnString= dataList.filter(dataList =>
          dataList.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        break;
      case 'cognome':
        this.returnString= dataList.filter(dataList =>
          dataList.surname.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        break;
      case 'eta':
        this.returnString= dataList.filter(dataList =>
          dataList.age.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        break;
    }


    return this.returnString;

  }

}
