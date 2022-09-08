import { Component, OnInit, OnChanges } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit{
  
  tickData:any;
  haveStocks:boolean;
  own_shares:number;

  constructor(private data :DataService) {
    this.data.focusUpdate.subscribe((a)=>{
      this.tickData=this.data.database.filter(x=>x.symbol===a)[0];
      this.haveStocks=Object.keys(this.data.own).includes(this.tickData.symbol) && this.data.own[this.tickData.symbol]!==0
      this.own_shares=this.data.own[this.tickData.symbol]===undefined?0:this.data.own[this.tickData.symbol]
    }); 
  }
  ngOnInit(): void {
    
  }

  buy(){
    //for v1 can buy only one share at a time
    let ticker=this.tickData.symbol
    this.data.Buy(ticker,1)
    this.haveStocks=true
    this.own_shares+=1
  }
  sell(){
    //for v1 can buy only one share at a time
    let ticker=this.tickData.symbol
    this.data.Sell(ticker,1)
    if(this.data.own[this.tickData.symbol]===0){
      this.haveStocks=false
    }
      this.own_shares-=1
    
  }
}
