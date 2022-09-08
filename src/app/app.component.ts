import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[DataService]
})
export class AppComponent {
  
  // constructor(private data:DataService){}
  
  //   watchList=this.data.watchList

  //   FocusTick=(event :any)=>{
  //     this.data.setFocus(event)
  //   }
}
