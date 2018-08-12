import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Output Demo';

  result : number = 0;

  getAdditionResult(result){
    console.log(2+ " ========== ");
    this.result = result;
  }
}
