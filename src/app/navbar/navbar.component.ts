import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  srhTicker:string='';


  constructor() { }

  ngOnInit(): void {
  }

  Search=(srh)=>{
    console.log(srh.value.toUpperCase())
  }
}
