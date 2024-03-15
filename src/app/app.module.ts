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
import { SearchComponent } from './search/search.component';
import { FuzzysearchComponent } from './fuzzysearch/fuzzysearch.component';
import { OrderComponent } from './order/order.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [provideRouter(appRoute, withComponentInputBinding())],
  bootstrap: [AppComponent]
})
export class AppModule { }
