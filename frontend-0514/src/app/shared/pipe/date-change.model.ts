import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateChange'
})
export class DateChangePipe implements PipeTransform {
  transform(value: string): string {
    let rc: string='';
    if(value!=''){
      let sourceYear = value.substr(0,3);
      let currentYear = parseInt(sourceYear, 10) + 1911;
      rc = currentYear + '/' + value.substr(3,2) + '/' + value.substr(5,2);
    }
    return rc;
  }
}
