import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { CartService } from '../cart.service';
import { ProductData } from '../products';
import { orderdata } from '../orders';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  
  readonly getById = "https://uiexercise.theproindia.com/api/Product/GetProductById";
  readonly Orderl='https://uiexercise.theproindia.com/api/Order/AddOrder';
  ProductId:string="";
  pquan:number=0;
  prod:ProductData={
    ProductId:'',
    ProductName:'',
    Quantity:0,
    IsActive:false
  };
  process:orderdata={
    customerId: '710ae5d-ebe1-4a04-aadd-045447243f52',
    productId: "",
    quantity: 0
  }
  constructor(private https:HttpClient,private route:ActivatedRoute,private router:Router,private cart:CartService,private toast:ToastrService) {
  }
  ngOnInit():void{
    this.route.queryParams.subscribe((res)=>{
      this.https.get<ProductData>(`${this.getById}?ProductId=${res['ProductId']}`).subscribe((ress:any)=>{
        this.prod=ress;
      })
      this.ProductId=res['ProductId'];
      this.pquan=res['Quantity'];
    })    
  }

  ConfirmOrder(){
    if(this.prod.Quantity<this.pquan||this.prod.Quantity<=0||this.pquan<=0){
      this.toast.error("Quantity either exeeded Or in sufficent",'Stock');
    }
    else{
      this.process={
        
        customerId:'d2d5cc60-349e-4759-9bf0-c2804f05ac55',
        productId:this.ProductId,
        quantity:this.pquan
      }
      this.https.post(this.Orderl,this.process).subscribe(res=>{
        this.toast.success('added sucessfully','Purchase');
        this.cart.afterPurchase(this.prod.ProductName,this.ProductId,this.pquan)
        this.router.navigate(['/GETPRODUCT']);
      },(err)=>{
        alert(err);
      })
    }

  }
  
}
