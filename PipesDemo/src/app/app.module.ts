import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomePipe } from './welcome.pipe';
import { FormateStringPipe } from './formate-string.pipe';
import { StatusconvertPipe } from './statusconvert.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    FormateStringPipe,
    StatusconvertPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
