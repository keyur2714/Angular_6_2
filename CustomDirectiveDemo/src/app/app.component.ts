import { Component,OnInit,ViewChild } from '@angular/core';
import { MyElementStyleDirective } from './my-element-style.directive';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  myColor : string = "blue";

  @ViewChild(MyElementStyleDirective)
  myElementStyleDirective : MyElementStyleDirective;

  constructor(){
    console.log("App Component Object Created...!");
  }

  ngOnInit(){
    console.log("App Component Initialized...!");
  }

  changeColor(color:string){
    console.log(color);
    this.myElementStyleDirective.changeColor(color);
  }
}
