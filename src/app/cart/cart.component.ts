import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { prod } from '../prod';
import { Router,NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit{
  constructor(private cart:CartService,private router:Router,private toast:ToastrService){}
  products:prod[]=[];
 ngOnInit(): void {
   this.products=this.cart.sendData();
 }
 delete(pro:prod){
  this.cart.deleteData(pro);
  this.toast.success(`${pro.productname} removed successfully`,'Delete')
 }
 cartpurchase(pro:prod){
    const navigationExtras:NavigationExtras={
      queryParams:{
        ProductId:pro.productid,
        Quantity:pro.pquan
      }
    }
    this.router.navigate(['/ORDER'],navigationExtras)
 }
}

