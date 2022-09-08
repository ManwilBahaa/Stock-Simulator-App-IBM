import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  news
  constructor(private data:DataService) {
  this.news=this.data.news
    console.log(this.news)
   }

  ngOnInit(): void {
   
  }

}
