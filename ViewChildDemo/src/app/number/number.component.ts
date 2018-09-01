import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';
import { NumberUtilComponent } from './number-util.component';
@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  @ViewChild("num1")
  number1 : ElementRef;

  @ViewChild("num2")
  number2 : ElementRef;

  @ViewChild("h")
  h : ElementRef;

  @ViewChild(NumberUtilComponent)
  numberUtilComponent: NumberUtilComponent;

  result: number = 0;
  constructor() { }

  ngOnInit() {    
  }

  add(){
    console.log(this.number1.nativeElement.value);
    console.log(this.h.nativeElement.innerHTML);
    this.result = this.numberUtilComponent.add(parseInt(this.number1.nativeElement.value),parseInt(this.number2.nativeElement.value));
  }  

  sub(){
    console.log(this.number1.nativeElement.value);
    console.log(this.h.nativeElement.innerHTML);
    this.result = this.numberUtilComponent.sub(parseInt(this.number1.nativeElement.value),parseInt(this.number2.nativeElement.value));
  }

  mul(){
    console.log(this.number1.nativeElement.value);
    console.log(this.h.nativeElement.innerHTML);
    this.result = this.numberUtilComponent.mul(parseInt(this.number1.nativeElement.value),parseInt(this.number2.nativeElement.value));
  }

  div(){
    console.log(this.number1.nativeElement.value);
    console.log(this.h.nativeElement.innerHTML);
    this.result = this.numberUtilComponent.div(parseInt(this.number1.nativeElement.value),parseInt(this.number2.nativeElement.value));
  }
}
