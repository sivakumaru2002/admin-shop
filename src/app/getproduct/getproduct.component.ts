import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData } from '../products';
import { Router, NavigationExtras } from '@angular/router';
import {CartService} from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';

export class ServiceNameService {
  constructor() { }
  
}

@Component({
  selector: 'app-getproduct',
  templateUrl: './getproduct.component.html',
  styleUrls: ['./getproduct.component.css'],
})
export class GetproductComponent {
  readonly getk = 'https://uiexercise.theproindia.com/api/Product/GetAllProduct';
  readonly orderlink = "https://uiexercise.theproindia.com/api/Order/AddOrder";

  products: ProductData[] = [];
  pquan:number=0;
  constructor(private https: HttpClient, private router: Router,private cart:CartService,private matbar:MatSnackBar,private toast:ToastrService) {  }
  getProduct() {
    this.https.get<ProductData[]>(this.getk).subscribe((res) => {
      this.products = res;
    }, () => {
      this.toast.error('error:-internal server ','Server error');
    })
  }


  ngOnInit(): void{
    this.getProduct()
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

  addCart(pro:ProductData){
  this.cart.addData(pro.ProductId,pro.ProductName)
  this.toast.success("ADDED TO CART",'Cart!');
  }
}
