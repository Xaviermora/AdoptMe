import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnimalesService } from '../../services/animales.service';

@Component({
  selector: 'app-dar-en-adopcion',
  templateUrl: './dar-en-adopcion.component.html',
  styleUrls: ['./dar-en-adopcion.component.css']
})
export class DarEnAdopcionComponent {
  edad=[
    "Cachorro lactante",
    "Cachorro",
    "Cachorro adolecente",
    "Adulto",
    "Senior"
  ]
  razas=[
    "Calle",
    "Vereda",
    "Asfalto",
    "PLaza"
  ]
  provincia=[
    "Neuquen",
    "Rio Negro"
  ]
  ciudad=[
    "Cipolleti",
    "General Fernandez Oro",
    "Ciudad de General Roca",
    "San Carlos de Bariloche",
    "El Bolson",
    "Viedma",
    "Villa Regina",
    "Catriel",
    "Las Grutas",
    "Cinco Saltos",
    "Allen"
  ]

  darEnAdopcion = new FormGroup({
    animal: new FormControl('', Validators.required),
    nombre: new FormControl(''),
    edad: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    castrado: new FormControl(false),
    raza: new FormControl('', Validators.required),
    provincia: new FormControl('', Validators.required),
    ciudad: new FormControl('', Validators.required),
    imgs: new FormControl<string[]>([]),
    descripcion: new FormControl('', Validators.required),
    requisitos: new FormControl('')
  })

  darEnAdopcionIsSubmitted: boolean = false
  loading: boolean = false
  showMsg: boolean = false
  filesControl = new FormControl([])
  files: File[] = []

  constructor(private animalesService: AnimalesService){}
    
  async onSubmit(){
    this.darEnAdopcionIsSubmitted = true

    if(this.darEnAdopcion.status == 'VALID' && this.files.length !== 0){
      this.loading = true
      this.darEnAdopcion.controls.imgs.setValue(await this.animalesService.uploadImg(this.files, '12'))
      await this.animalesService.addAnimal(this.darEnAdopcion.value, '12')
      this.loading = false
      this.files = []
      this.filesControl.reset()
      this.darEnAdopcion.reset()
      this.darEnAdopcionIsSubmitted = false
      this.showMsg = true
      
      setTimeout(() => this.showMsg = false, 4000) // Deja de mostrar el toast despues de 4 segundos
    }

    window.scrollTo(0, 0)
  }

  onChange(e: any){
    for (const img of e.target.files) this.files.push(img)
  }
}
