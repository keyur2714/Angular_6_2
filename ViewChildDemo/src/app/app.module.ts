import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberComponent } from './number/number.component';
import { NumberUtilComponent } from './number/number-util.component';
@NgModule({
  declarations: [
    AppComponent,
    NumberComponent,
    NumberUtilComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
