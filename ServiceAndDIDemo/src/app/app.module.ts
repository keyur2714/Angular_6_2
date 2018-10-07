import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExamService } from './services/ExamService';
import { IQuestion } from './services/IQuestion';
import { AngularQuestion } from './services/AngularQuestion';
import { SpringQuestion } from './services/SpringQuestion';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: IQuestion , useClass : AngularQuestion},
    ExamService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
