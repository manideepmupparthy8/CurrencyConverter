import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataPipe'
})
export class DataPipePipe implements PipeTransform {

  transform(value: string): string {
    if(value.length > 55) {
      return   value.slice(0,55)+" ..."
    }else{
      return value.slice(0,value.length)
    }
  }

}
