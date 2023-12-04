import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'flowbite';
import { Animal } from 'src/app/models/animal';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { NotificacionesService } from 'src/app/modules/notificaciones/services/notificaciones.service';
import { userExistsInCollection } from 'src/app/shared/guards/auth.guard';
import { UsuariosService } from 'src/app/modules/usuario/services/usuarios.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() animal!: Animal
  @Input() modal!: Modal

  showToast: boolean = false
  msgToast!: string
  severity: string = 'success'
  loading: boolean = false

  constructor(private notificacionesService: NotificacionesService, private authService: AuthService, private router: Router, private usuariosService: UsuariosService){}

  solicitarAdopcion(){
    const userSubscription = this.authService.user.subscribe(user => {
      // Se desuscribe después del primer valor recibido
      if (userSubscription) userSubscription.unsubscribe();

      this.loading = true

      // Se comprueba que haya un usuario en sesión
      if(user){
        // Se comprueba que el usuario exista en la colección de firebase
        this.usuariosService.userExists(user.uid).subscribe(async userExists => {
          if(userExists){
            await this.notificacionesService.createNotificacion({
              idAnimal: this.animal.id,
              idUsuarioAdoptante: user.uid,
              idUsuario: this.animal.userId
            })
    
            this.msgToast = 'Se mandó la solicitud'
            this.showToast = true
            this.loading = false
          }else{
            this.router.navigate(['/datos-personales'])
          }
        })
      }else{this.router.navigate(['/login'])}
    })
  }
}
