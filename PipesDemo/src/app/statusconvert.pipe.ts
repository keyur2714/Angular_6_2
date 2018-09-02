import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusconvert'
})
export class StatusconvertPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let color = '';
    if(value === 'APPROVED'){
       color = 'green';
    }else if(value === 'DENIEND'){
      color = 'orange';
    }else if(value === 'FAIL'){
      color = 'red';
    }
    return color;
  }

}
