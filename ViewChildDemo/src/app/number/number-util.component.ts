import { Component } from '@angular/core';
@Component({
    selector : 'app-number-util',
    template: ``,
    styles: []
})
export class NumberUtilComponent{
    add(num1: number,num2: number):number{
        return num1+num2;
    }
    sub(num1: number,num2: number):number{
        return num1-num2;
    }
    mul(num1: number,num2: number):number{
        return num1*num2;
    }
    div(num1: number,num2: number):number{
        if(num2 === 0)
            return 0;
        return num1/num2;
    }
}