import { Pipe, PipeTransform } from '@angular/core';
import { ProductData } from './products';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(products: ProductData[], searchText: string): ProductData[] {
    if (!products) {
      return products;
    }
    if (!searchText) {
      return products;
    }
    searchText = searchText.toLowerCase();
    return products.filter((product:ProductData) => {
      return product.ProductName?.toLowerCase().includes(searchText);
    });
  }
}
