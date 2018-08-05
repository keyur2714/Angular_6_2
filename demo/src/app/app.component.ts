import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
    console.log("AppComponent Object is Created...!");
  }
  title = 'Demo App';
  setCountryValue(country):void{
    console.log(country);
  }
}
