import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

// Función para la validadción del form
export function wrongOptionSearchSelect(list: string[]): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      return list.includes(control.value) ? null : {wrongOption: true} // Se determina si existe la opción en la lista del select
    }
}