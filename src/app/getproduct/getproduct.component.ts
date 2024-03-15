import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductData } from '../products';
import { Router, NavigationExtras } from '@angular/router';
import { pushcart ,productid} from '../cartpro';

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
  constructor(private https: HttpClient, private router: Router) {  }
  getProduct() {
    this.https.get<ProductData[]>(this.getk).subscribe((res) => {
      this.products = res;
    }, () => {
      alert('error:-internal server ');
    })
  }

  ngOnInit(): void{
    this.getProduct()
  }

  addOrder(pro: ProductData) {
    if (pro.Quantity == 0) {
      alert('Stock is Empty ADD Products');

    } else {
      const navigationExtras: NavigationExtras = {
        queryParams:{
          ProductId:pro.ProductId,
        }
      };
      
      this.router.navigate(["/ORDER"], navigationExtras);
    }
  }

  addCart(pro:ProductData){
    alert("called cart button");
    pushcart(pro.ProductId);
    console.log(productid);
    
  }
}
