import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  number1 : number = 0;
  number2 : number = 0;

  result: number = 0;

  @Output("getResult")
  getAdditonResult = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.getAdditonResult.emit(11);
  }

  add(){
    console.log(1+ " ========== ");
    console.log(this.number1);
    this.result = this.number1 + this.number2;
    this.getAdditonResult.emit(this.result);
  }

}
