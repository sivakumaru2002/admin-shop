import { Component,OnInit } from '@angular/core';
import { productid } from '../cartpro';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit{
ngOnInit(){
  console.log(productid)
}
}

