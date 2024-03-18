import { Component ,OnInit} from '@angular/core';
import { ProductData } from '../products';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {CartService} from '../cart.service';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-getgrid',
  templateUrl: './getgrid.component.html',
  styleUrl: './getgrid.component.css'
})
export class GetgridComponent {
readonly getk="https://uiexercise.theproindia.com/api/Product/GetAllProduct";
products:ProductData[]=[];
  searchText: string = '';
  filteredItems: ProductData[] = [];
  pquan:number=0;
constructor(private https:HttpClient,private toast:ToastrService, private router: Router,private cart:CartService){this.getProduct();}
ngOnInit(){
  this.getProduct();
}
getProduct(){
  this.https.get<ProductData[]>(this.getk).subscribe((res)=>{
    this.products=res;
    this.filterItems();
  },()=>{
    this.toast.error('Server is not ok','Server');
  })
}
addOrder(pro: ProductData) {
  if (pro.Quantity <= 0) {
    this.toast.error('Stock is Empty ADD Products','Stock');

  } else {
    const navigationExtras: NavigationExtras = {
      queryParams:{
        ProductId:pro.ProductId,
        Quantity:0
      }
    };
    
    this.router.navigate(["/ORDER"], navigationExtras);
  }
}
filterItems() {
  this.filteredItems = this.products.filter((item) => {  
    return item.ProductName?.toLowerCase().includes(this.searchText.toLowerCase());
  });
}
addCart(pro:ProductData){
this.cart.addData(pro.ProductId,pro.ProductName)
this.toast.success("ADDED TO CART",'Cart!');
}
}
