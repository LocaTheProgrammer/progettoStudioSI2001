import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {
  logPaginationPipe:string="[Pagination Pipe] ";
    transform(dataList: any[], visibleElements: string, startPage:string) {
    console.log(this.logPaginationPipe,"visible elements: "+visibleElements)
      if(dataList && (visibleElements=='0'||visibleElements==undefined||visibleElements=="")){
        visibleElements=dataList.length.toString();
      }

      //ho 30 elementi ne visualizzo 5 a pagina, voglio la pagina 3 6*3=18
      //visible elements è la pagina che mi interessa visualizzare
      //lunghezza/numero elementi per pagina -> trovo quante pagine
      //risultati voluti = pagina di partenza+paginazione
      //punto di partenza slice =pagina di partenza*paginazione

    return dataList ? dataList.slice(+startPage*+visibleElements, (+startPage*+visibleElements)+(+visibleElements)) : [];
  }

}
