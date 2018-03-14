import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

/*export class FilterPipe implements PipeTransform {
  transform(items: any[], search: number): any[] {
    if(!items) return [];
    if(!search) return items;
//searchText = searchText.toLowerCase();
return items.filter( it => {
      return it.includes(search);
	  return items;
    });
	
   }*/
 export class FilterPipe implements PipeTransform {
    transform(value: any, input: string) {
        if (input) {
            input = input.toLowerCase();
            return value.filter(function (el: any) {
               // return el.name.toLowerCase().includes(input)  ||
                  return  el.id.toLowerCase().includes(input);
            })
        }
        return value;
    }  
	
}
