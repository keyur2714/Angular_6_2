import { Directive,AfterViewInit,Input,ElementRef,OnInit } from '@angular/core';
@Directive({
  selector: '[appMyElementStyle]'
})
export class MyElementStyleDirective implements OnInit,AfterViewInit{

  @Input()
  color: string = 'red';

  @Input()
  fontSize: string = '15px';

  constructor(private elementRef:ElementRef) { 
    console.log("Directive Object Created...!");
  }

  ngOnInit(){
    console.log("Directive Object Init...!");
  }

  ngAfterViewInit(){
    console.log("Directive Object After View Init...!");
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
  }

  changeColor(color: string):void{
    this.elementRef.nativeElement.style.color = color;
  }
}
