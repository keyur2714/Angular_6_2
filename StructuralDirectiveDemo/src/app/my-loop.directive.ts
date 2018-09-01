import { Directive,ViewContainerRef,TemplateRef,Input } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private templateRef:TemplateRef<any>,private viewContainerRef:ViewContainerRef) { }

  @Input('appMyLoop') set myForLoop(loopCounter:number){
    for(let i=1;i<=loopCounter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
