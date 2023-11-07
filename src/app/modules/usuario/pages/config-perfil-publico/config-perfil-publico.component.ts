import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-config-perfil-publico',
  templateUrl: './config-perfil-publico.component.html',
  styleUrls: ['./config-perfil-publico.component.css']
})
export class ConfigPerfilPublicoComponent {
  @Input() usuario!: Usuario

  perfilPublicoUpdate = new FormGroup({
    photoURL: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    fechaDeNacimiento: new FormControl<any>('', Validators.required)
  })

  ngOnInit(){
    if (this.usuario){
      this.perfilPublicoUpdate.setValue({
        photoURL: this.usuario.photoURL,
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        email: this.usuario.email,
        fechaDeNacimiento: this.usuario.fechaDeNacimiento
      })
    }
  }
}
