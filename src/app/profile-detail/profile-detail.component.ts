import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  userName:any;
  cash_balance : number ;
  total_asset_value : number ;
  profile_pic : string;
  database:any;


  own_tick:any;
  own : any;


  constructor(private data:DataService) { 
    this.userName = this.data.username
    this.cash_balance = this.data.cash_balance
    this.total_asset_value=this.data.total_asset_value
    this.profile_pic=this.data.profile_picture
    this.own=this.data.own;
    this.own_tick=Object.keys(this.data.own).filter(x=>this.own[x]!==0)
    this.database=this.data.database;
  }

  ngOnInit(): void {
    let arr=Object.keys(this.own).map(x=>this.getVal(x))
    const initialValue = 0;
    this.total_asset_value = arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      initialValue
    );
  }
  getImg(item){
    let img=this.database.filter(x=>x.symbol===item)[0].logo
    return img
  }
  getVal(item){
    let no_shares = this.own[item]
    let price_ps = this.database.filter(x=>x.symbol===item)[0].regularMarketPrice
    return no_shares * price_ps
  }

  
}
