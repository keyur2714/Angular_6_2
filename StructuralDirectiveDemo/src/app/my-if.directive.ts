import { Directive,Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef: ViewContainerRef) { }

  @Input('appMyIf') set appMyIfCondition(condition:boolean){
    console.log(condition);
    if(condition){
      this.viewContainerRef.createEmbeddedView(this.templateRef);      
    }else{
      this.viewContainerRef.clear()
    }
  } 
}
