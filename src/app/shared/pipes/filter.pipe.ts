import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(list: string[], searchValue: string = ''): string[]{
    return list.map(item => item.toLowerCase()) // Devuelve un nuevo array con todos los items en minúscula
              .filter(item => item.includes(searchValue?.toLowerCase())) // Devuelve los items que contengan algun valor de la busqueda
  }
}
