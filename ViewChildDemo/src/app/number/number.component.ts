import { Component, OnInit, ElementRef, ViewChild, TemplateRef } from '@angular/core';

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

  result: number = 0;
  constructor() { }

  ngOnInit() {    
  }

  add(){
    console.log(this.number1.nativeElement.value);
    console.log(this.h.nativeElement.innerHTML);
    this.result = parseInt(this.number1.nativeElement.value) + parseInt(this.number2.nativeElement.value);
  }  

}
