import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MsgComponent } from './msg/msg.component';

@NgModule({
  declarations: [
    AppComponent,
    MsgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MsgComponent]
})
export class AppModule { }
