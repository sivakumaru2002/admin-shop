import { Component ,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css',
})
export class AddproductComponent {
  readonly addlink="https://uiexercise.theproindia.com/api/Product/AddProduct";
  constructor(private https:HttpClient,private toast:ToastrService){}
  products: {
    ProductId?: string;
    ProductName: string;
    Quantity: number;
    IsActive: boolean;
} = {
    ProductId: '',
    ProductName: '',
    Quantity: 0,
    IsActive: false
};
Pname:string="";
Pquan:number=1;
Pnamedis:boolean=false;
ngOnInit(){
} 
addproduct(){
    this.products={
      ProductName:this.Pname,
      Quantity:this.Pquan,
      IsActive:true
    }
    if(this.Pname.length===0){
      this.Pnamedis=true;
    }else if(this.Pname.length!=0){
      this.Pnamedis=false;
    this.https.post(this.addlink,this.products).subscribe((res)=>{
      this.toast.success("PRODUCT ADDED SUCCESSFULLY",'Stock');
 
    },() => {
      this.toast.error("Error ,please try again!!!!");
    })
    
  }
  }
}
