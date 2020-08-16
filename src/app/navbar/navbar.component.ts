import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
 
  
  constructor() {}
    
    ngOnInit(): void {
    }
    onmouseOver(event: any){
      event.target.style.color = "white";
      event.target.style.backgroundColor = "black";

    }
    onmouseLeave(event:any){
      event.target.style.color = "black";
      event.target.style.backgroundColor = "white";
      event.target.style.border="solid black";
    }
   
   
  }
