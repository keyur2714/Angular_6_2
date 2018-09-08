import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Observable Demo';

  num: number = 0;

  ngOnInit(){
    let numbers = Observable.interval(1000);
    numbers.subscribe(
      (num)=>{
        console.log(num);
        this.num = num;
      }
    )
    let title = Observable.of(this.title);
      title.subscribe((data)=>{
      console.log(data);
    })    
  }
}
