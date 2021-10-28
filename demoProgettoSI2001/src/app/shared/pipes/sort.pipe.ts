import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:true
})
export class SortPipe implements PipeTransform {
  sortedArray: any[] = [];

  transform(list : any[], column: string, columnOrder : string ): any [] {
    console.log("column order = "+columnOrder);


    if(list){
      switch (columnOrder){
        case 'asc':
          this.sortedArray= list.sort((a,b)=>{
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
          this.sortedArray= list.sort((a,b)=>{
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

    return this.sortedArray;
  }

}
