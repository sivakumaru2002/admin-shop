import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetproductComponent } from './getproduct/getproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FuzzysearchComponent } from './fuzzysearch/fuzzysearch.component';
import { OrderComponent } from './order/order.component';
import { CartComponent } from './cart/cart.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

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
    path:'SEARCH',component:SearchComponent,
  },{
    path:'CART',component:CartComponent,
  },{
    path:'ORDER',component:OrderComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    GetproductComponent,
    AddproductComponent,
    HomeComponent,
    SearchComponent,
    FuzzysearchComponent,
    OrderComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    RouterModule.forRoot(appRoute),
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [provideRouter(appRoute, withComponentInputBinding()), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
