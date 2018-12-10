import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pizzaFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value, args);
    if (args !== '') {
      return value.filter(
        pizza => ( pizza.label.toLowerCase().indexOf(args.toLowerCase()) !== -1)
        || ( pizza.ingredients.toLowerCase().indexOf(args.toLowerCase()) !== -1)
        || ( pizza.price.toString().toLowerCase().indexOf(args.toLowerCase()) !== -1));
    } else {
      return value;
    }
  }

}
