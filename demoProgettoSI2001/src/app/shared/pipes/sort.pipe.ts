import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure:true
})
export class SortPipe implements PipeTransform {
  sortedArray: any[] = [];
  logSort:string="[SortPipe] ";

  transform(list : any[], column: string, columnOrder : string ): any [] {
  //  console.log(this.logSort,"list to order: "+list.slice(0,5));
    console.log(this.logSort,"column order = "+columnOrder);
    console.log(this.logSort,"column to order by: "+column)

    if(list){
      switch (columnOrder){
        case 'asc':
          list= list.sort((a,b)=>{
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
          list= list.sort((a,b)=>{
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
  console.log(this.logSort,"list: ", list)
    return list;
  }

}
