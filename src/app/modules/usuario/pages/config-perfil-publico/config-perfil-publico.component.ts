import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

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
  showToast: boolean = false
  msgToast!: string
  severity!: string
  file!: File | string
  constructor(private usuariosService: UsuariosService){}

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

  async onSubmit(){
    if(typeof(this.file) == 'string'){
      this.perfilPublicoUpdate.controls.photoURL.setValue(this.file)
    }else{
      const photoUrl = await this.usuariosService.updateUserImg(this.usuario.uid, this.file)
      this.perfilPublicoUpdate.controls.photoURL.setValue(photoUrl)
    }

    this.usuariosService.updateUser(this.usuario.uid, this.perfilPublicoUpdate.value)
    .then(() => {
      this.msgToast = 'Se actualizó al usuario con éxito'
      this.severity = 'success'
      this.showToast = true
    })
    .catch(() => {
      this.msgToast = 'Hubo un error al actualizar al usuario'
      this.severity = 'danger'
      this.showToast = true
    })

    window.scrollTo(0, 0)
  }

  onChangeImg(e: any){
    const imagePreview = document.getElementById('userImgPreview');
    this.file = e.target.files[0]

    if (this.file && typeof(this.file) !== 'string') {
      // Creación de un FileReader para leer el archivo seleccionado
      const reader = new FileReader();

      // Función que se ejecuta cuando el FileReader termina de leer el archivo como url
      reader.onload = (e) => imagePreview?.setAttribute('src', e.target!.result!.toString())

      // Lee el archivo como url
      reader.readAsDataURL(this.file);
    }
  }

  quitarFoto(){
    const imagePreview = document.getElementById('userImgPreview');
    const defaultUserPhotoUrl = 'https://firebasestorage.googleapis.com/v0/b/adoptme-4080b.appspot.com/o/default-user-photo.svg?alt=media&token=37073846-dc65-4429-93c3-ac69ca63edab' 
    imagePreview?.setAttribute('src', defaultUserPhotoUrl)
    this.file = defaultUserPhotoUrl
  }
}
