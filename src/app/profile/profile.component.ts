import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  total_asset_value:number;
  cash_balance:number;
  profile_pic :string;

  constructor(private data :DataService) {
    
  }

  ngOnInit(): void {
   this.profile_pic=this.data.profile_picture
   this.total_asset_value=this.data.total_asset_value
   this.cash_balance=this.data.cash_balance
    this.data.transactionUpdate.subscribe((x)=>{
      console.log('subscriber called ..... ' ,x)
      this.total_asset_value = this.data.total_asset_value
      this.cash_balance=this.data.cash_balance
    
    }) 
  }
}
