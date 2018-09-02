import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: any, gender?: any): any {
    console.log(value);
    console.log(gender);
    let welcomeMsg = "";
    
    if(gender === 'M')
      welcomeMsg = "Welcome Mr "+value;
    else if(gender === 'F')
      welcomeMsg = "Welcome Miss "+value;
    return welcomeMsg;
  }

}
