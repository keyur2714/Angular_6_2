import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MsgComponent } from './msg/msg.component';
import { FriendsComponent } from './friends/friends.component';
import { EmployeeComponent } from './employee/employee.component';
import { NumberComponent } from './number/number.component';

@NgModule({
  declarations: [
    AppComponent, 
    MsgComponent,
    FriendsComponent,
    EmployeeComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module Loaded...!");
  }
}
