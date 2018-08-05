import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add(num1,num2):void{
    this.result = parseInt(num1)+parseInt(num2);
  }
}
