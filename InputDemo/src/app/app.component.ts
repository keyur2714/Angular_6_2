import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = "Good After noon";

  name: string = "keyur";
  revStr: string = '';

  msgList : string[] = [
    "Good Morning...!",
    "Good Afternoon...!",
    "Good Evening...!",
    "How are you?"
  ];

  reverseStr():void{
    console.log(this.name);
    let str = this.name.split('').reverse().join("");
    this.revStr = str;
  }
}
