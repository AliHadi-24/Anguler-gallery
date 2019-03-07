import { Pipe, PipeTransform } from '@angular/core'

@Pipe({name: 'filterOfImages'})
export class ImageFilterPipe implements PipeTransform {
  transform(items: any[], cata: string): any {
    if(cata === 'all'){ return items } else
    return items.filter(item =>{
      return item.category === cata;
    });
  }
}

