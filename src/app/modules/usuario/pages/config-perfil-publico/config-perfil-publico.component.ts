import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';
import { mayorDeEdad } from 'src/app/shared/validators/custom-validators';

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
    fechaDeNacimiento: new FormControl('', [Validators.required, mayorDeEdad()])
  })
  perfilPublicoUpdateIsSubmitted: boolean = false
  formValuesChanged: boolean = false

  showToast: boolean = false
  msgToast!: string
  severity!: string

  file!: File | string

  loading: boolean = false

  constructor(private usuariosService: UsuariosService, private authService: AuthService){}

  ngOnInit(){
    if (this.usuario){
      this.perfilPublicoUpdate.setValue({
        photoURL: this.usuario.photoURL,
        nombre: this.usuario.nombre,
        apellido: this.usuario.apellido,
        email: this.usuario.email,
        fechaDeNacimiento: this.usuario.fechaDeNacimiento.toString()
      })
    }
  }

  async onSubmit(){
    this.perfilPublicoUpdateIsSubmitted = true
  
    if(this.perfilPublicoUpdate.valid && this.formValuesChanged){
      this.loading = true
      let photoURL: string = ''

      if(typeof(this.file) === 'string'){
        photoURL = this.file
        this.perfilPublicoUpdate.controls.photoURL.setValue(photoURL)
      }else{
        photoURL = await this.usuariosService.updateUserImg(this.usuario.uid, this.file)
        this.perfilPublicoUpdate.controls.photoURL.setValue(photoURL)
      }
  
      this.usuariosService.updateUser(this.usuario.uid, this.perfilPublicoUpdate.value)
      .then(() => {
        this.authService.user.subscribe(user => user?.updateProfile({photoURL}))
        this.msgToast = 'Se actualizaron los datos con éxito'
        this.severity = 'success'
        this.showToast = true
        this.loading = false
      })
      .catch(() => {
        this.msgToast = 'Hubo un error al actualizar los datos'
        this.severity = 'danger'
        this.showToast = true
        this.loading = false
      })
    }

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
    this.formValuesChanged = true
  }
}
