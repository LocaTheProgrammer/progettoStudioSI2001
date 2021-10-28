import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:true
})
export class SortPipe implements PipeTransform {


  transform(list : any[], column: string, columnOrder : string ): any [] {


    if(list){
      switch (columnOrder){
        case 'asc':
        list.sort((a,b)=>{
            if(a[column]>b[column]){
              return 1;
            }
            if(a[column]<b[column]){
              return -1;
            }
            return 0; //se sono uguali
          });
          break;
        case 'desc':
         list.sort((a,b)=>{
            if(a[column]<b[column]){
              return 1;
            }
            if(a[column]>b[column]){
              return -1;
            }
            return 0; //se sono uguali
          });
          break;
      }

    }

    return list;
  }

}
