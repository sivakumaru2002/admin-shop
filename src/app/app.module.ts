import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GetgridComponent } from './getgrid/getgrid.component';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button'; 
import { ImageModule } from 'primeng/image'; 

const appRoute: Routes =[
  {
    path:'',redirectTo:'HOME',pathMatch:'full'
  }
  ,{
    path:'HOME',component:HomeComponent
  },
  {
    path:"GETPRODUCT",component:GetproductComponent,
  },{
    path:'ADDPRODUCT',component:AddproductComponent,
  },{
    path:'CART',component:CartComponent,
  },{
    path:'ORDER',component:OrderComponent,
  },{
    path :'GETG',component:GetgridComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GetproductComponent,
    AddproductComponent,
    HomeComponent,
    OrderComponent,
    CartComponent,
    GetgridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoute),
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    ButtonModule,
    ImageModule,
    CarouselModule,
  ],
  providers: [provideRouter(appRoute, withComponentInputBinding()), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
