import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData } from '../products';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  readonly apiUrl = "https://uiexercise.theproindia.com/api/Product/GetAllProduct";
  searchText: string = '';
  filteredItems: ProductData[] = [];
  products: ProductData[] = [];

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts() {
    this.http.get<ProductData[]>(this.apiUrl).subscribe((res) => {
      this.products = res;
      this.filterItems(); 
    },()=>{
      alert("Internal server error")
    });
  }

  filterItems() {
    this.filteredItems = this.products.filter((item) => {  
      return item.ProductName?.toLowerCase().includes(this.searchText.toLowerCase());
    });
  }

}
