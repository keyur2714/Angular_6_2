import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes Demo';

  date : Date= new Date();

  statusList: string[]=["APPROVED","DENIEND","FAIL"];

  name = "Ami";
  accountNumber = "12345678";
  person = {
    name: "keyur",
    city: "surat",
    mobileNo: "7387029671"
  }; 
  
  add(num1,num2):number{
    return num1+num2;
  }
}
