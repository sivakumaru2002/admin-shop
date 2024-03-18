import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate(['/ADDPRODUCT']);
  }

  navigate1() {
    this.router.navigate(['/GETPRODUCT']);
  }
  navigate2(){
    this.router.navigate(['/SEARCH']);
  }
  navigate3(){
    this.router.navigate(['/CART']);
  }
}
