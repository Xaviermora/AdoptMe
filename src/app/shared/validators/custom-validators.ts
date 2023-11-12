import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

// Validadción de para la uan selección incorrecta en el select con buscador
export function wrongOptionSearchSelect(list: string[]): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      return list.includes(control.value) ? null : {wrongOption: true} // Se determina si existe la opción en la lista del select
    }
}

// Validación mayor de edad
export function mayorDeEdad(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const fechaDeNacimiento = control.value
      const actualYear = new Date().getFullYear()
      let year: any
      if(fechaDeNacimiento){
        year = fechaDeNacimiento.match(/[0-9]{4}/) // Se obtiene el año de la fecha de nacimiento dada por el usuario
      } 
      return actualYear - year >= 18 ? null : {noEsMayor: true} // Se determina si es mayor o no
    }
}