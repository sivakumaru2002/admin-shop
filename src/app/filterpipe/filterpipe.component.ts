import { Component,OnInit} from '@angular/core';
import { ProductData } from '../products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-filterpipe',
  templateUrl: './filterpipe.component.html',
  styleUrl: './filterpipe.component.css'
})
export class FilterpipeComponent {
  readonly getk='https://uiexercise.theproindia.com/api/Product/GetAllProduct';
  searchText: string = '';
  products:ProductData[]=[];
  constructor(private https:HttpClient) {  
  }
  ngOnInit(){
    this.getProduct();
  }
  getProduct(){
    this.https.get<ProductData[]>(this.getk).subscribe((res)=>{
      this.products=res;
    },()=>{
      alert(`error server`);
    });
  }
}
