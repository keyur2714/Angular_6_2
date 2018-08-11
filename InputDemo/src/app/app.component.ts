import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  message = "Good After noon";

  msgList : string[] = [
    "Good Morning...!",
    "Good Afternoon...!",
    "Good Evening...!",
    "How are you?"
  ];
}
