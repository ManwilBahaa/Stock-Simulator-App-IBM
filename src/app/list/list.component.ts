import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  list:string[];
  constructor(private data : DataService) {}

  ngOnInit(): void {
    this.list=this.data.watchList
  }

  setFocus=(e : string)=>{
    this.data.setFocus(e)
  }

}
