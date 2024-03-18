import { Injectable } from '@angular/core';
import { prod } from './prod';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private readonly storagekey='product'
  private product:prod[]=[]
  prod1:prod={
   productid:"",
   productname:'',
   pquan:1
  }

  private loadCart() {
    const storedData = localStorage.getItem('product');
    if (storedData) {
      this.product = JSON.parse(storedData);
    }
  }

  private saveCart(){
    localStorage.setItem(this.storagekey,JSON.stringify(this.product))
  }
 constructor(){
  this.loadCart();
 }
 deleteData(pro:prod){
  var i=this.product.indexOf(pro);
  this.product.splice(i,1);
  this.saveCart()
 }

 afterPurchase(pname:string,pid:string,pquan:number){
  for(let i of this.product){
    if(i.productid===pid){
      if(pquan<i.pquan){
        i.pquan-=pquan;
        return;
      }else{
        this.prod1={productid:pid,productname:pname,pquan:pquan};
  var k=this.product.indexOf(this.prod1);
  this.product.splice(k,1);
  this.saveCart()
      }
    }
  }
 }

 addData(pro:string,name:string){
   for(let i of this.product){
     if(i.productid===pro){
       i.pquan++;
       this.saveCart();
       console.log(this.product);
       return;
     }
   };
   this.prod1={productid:pro,productname:name,pquan:1};
   this.product.push(this.prod1);
   console.log(this.product);
   this.saveCart();
 }
 sendData(): prod[] {
  return this.product;
 }
}
