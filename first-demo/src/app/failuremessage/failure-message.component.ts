import { Component } from '@angular/core';
@Component({
    selector: 'app-failure-message',
    template: `<h1>{{failureMessage}}</h1>`,
    styles: ['h1{color:red;}']
})
export class FailureComponent{
    failureMessage:string = '';    
    constructor(){
        console.log("Failure Component Object Created;");
        this.failureMessage = "Sorry But You are Fail...!";
    }
}