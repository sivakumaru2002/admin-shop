import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tutorials: {title:string,image:string}[]=[]; 
  
  constructor(private router: Router) {}
ngOnInit(){
  this.tutorials = [ 
    { 
        title: 'Web MH ', 
        image: 
'../assets/phone1.png', 
    }, 
    { 
        title: 'Interview Experience ', 
        image: 
'../assets/bag1.jpg', 
    }, 
    { 
        title: 'GeeksforGeeks Logo ', 
        image: 
'../assets/itachi.png', 
    }, 
    { 
        title: 'GeeksforGeeks Carnival ', 
        image: 
'../assets/broly.jfif', 
    }, 
    { 
        title: 'Python Course ', 
        image: 
'../assets/shoe.jpg', 
    }, {
      title:'hello',
      image:'../assets/watch.png'
    }
]; 
}
  navigate() {
    this.router.navigate(['/ADDPRODUCT']);
  }
}
