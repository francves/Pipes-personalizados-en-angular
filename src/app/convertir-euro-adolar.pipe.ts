//convertir-euro-adolar.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirEuroADolar'
})
export class ConvertirEuroADolarPipe implements PipeTransform {

  transform(value: number, tasaCambio: number): any {
    return value * tasaCambio
  }

}
