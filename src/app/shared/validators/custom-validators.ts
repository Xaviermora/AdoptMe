import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

// Función para la validadción del form
export function mayorDeEdad(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const fechaDeNacimiento = control.value
        const actualYear = new Date().getFullYear()
        let year: any
        if (fechaDeNacimiento) {
            year = fechaDeNacimiento.match(/[0-9]{4}/) // Se obtiene el año de la fecha de nacimiento dada por el usuario
        }
        return actualYear - year >= 18 ? null : { noEsMayor: true } // Se determina si es mayor o no
    }
}