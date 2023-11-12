import { Component } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalesService } from '../../services/animales.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { wrongOptionSearchSelect } from 'src/app/shared/validators/custom-validators';
import { CiudadesService } from 'src/app/shared/services/ciudades.service';

@Component({
  selector: 'app-dar-en-adopcion',
  templateUrl: './dar-en-adopcion.component.html',
  styleUrls: ['./dar-en-adopcion.component.css']
})
export class DarEnAdopcionComponent {
  darEnAdopcion = new FormGroup({
    animal: new FormControl('', Validators.required),
    nombre: new FormControl(''),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    castrado: new FormControl(false),
    raza: new FormControl('', [Validators.required, wrongOptionSearchSelect(this.animalesService.razas)]),
    ciudad: new FormControl('', Validators.required),
    imgs: new FormControl<string[]>([]),
    descripcion: new FormControl('', Validators.required),
    requisitos: new FormControl('')
  })

  darEnAdopcionIsSubmitted: boolean = false
  loading: boolean = false
  showMsg: boolean = false
  files: File[] = []
  wrongImageType!: boolean

  constructor(public animalesService: AnimalesService, private authService: AuthService, public ciudadesService: CiudadesService){}

  async onSubmit(){
    this.darEnAdopcionIsSubmitted = true
    this.wrongImageType = false
    
    if(this.darEnAdopcion.valid && this.files.length > 0 && this.files.length <= 3){
      let inputImgs = document.getElementById('imgs') as HTMLInputElement
      this.loading = true

      let userId = await this.authService.getUid()
      this.darEnAdopcion.controls.imgs.setValue(await this.animalesService.uploadImgs(this.files, userId!)) // Se guardan las urls de las imagenes a subir en el formulario darEnAdopcion

      await this.animalesService.addAnimal(this.darEnAdopcion.value, userId!)

      this.loading = false

      // Se resetean los valores del formulario
      this.files = []
      inputImgs.value = ''
      this.darEnAdopcion.reset()
      this.darEnAdopcionIsSubmitted = false

      this.showMsg = true // Se muestra el toast
      setTimeout(() => this.showMsg = false, 4000) // Deja de mostrar el toast despues de 4 segundos
    }

    window.scrollTo(0, 0)
  }

  onChange(e: any){
    let newFiles = []
    this.wrongImageType = false

    for (const img of e.target.files) {
      if(this.isImage(img)) newFiles.push(img)
      else {
        let inputImgs = document.getElementById('imgs') as HTMLInputElement
        inputImgs.value = ''
        this.wrongImageType = true
      }
    }

    this.files = newFiles
  }

  isImage(file: File): boolean {
    const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/bmp', 'image/webp'];
  
    return allowedImageTypes.includes(file.type);
  }
}
