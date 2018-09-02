import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formateString'
})
export class FormateStringPipe implements PipeTransform {

  transform(value: string, maskNoOfChar: number,testStr : string): any {
    console.log(value);
    console.log(maskNoOfChar);
    let maskAccNo = value.substring(0,maskNoOfChar);
    console.log(maskAccNo);
    console.log(testStr);
    let estChar = "";
    for(var i=1;i<=maskNoOfChar;i++){
      estChar = estChar+"*";
    }    
    return maskAccNo+estChar;
  }

}
