import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { FailureComponent } from './failuremessage/failure-message.component';
import { FriendsBookComponent } from './friends-book/friends-book.component';
import { StudentComponent } from './student/student.component';
@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FailureComponent,
    FriendsBookComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
