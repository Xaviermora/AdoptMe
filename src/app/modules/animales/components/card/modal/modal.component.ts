import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Modal } from 'flowbite';
import { Animal } from 'src/app/models/animal';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { NotificacionesService } from 'src/app/modules/notificaciones/services/notificaciones.service';

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

  constructor(private notificacionesService: NotificacionesService, private authService: AuthService, private router: Router){}

  solicitarAdopcion(){
    this.authService.user.subscribe(async user => {
      if(user){
        await this.notificacionesService.createNotificacion({
          idAnimal: this.animal.id,
          idUsuarioAdoptante: user.uid
        })

        this.msgToast = 'Se mandó la solicitud'
        this.showToast = true
      }else{this.router.navigate(['/login'])}
    })
  }
}
