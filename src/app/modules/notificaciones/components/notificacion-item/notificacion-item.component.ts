import { Component, Input } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Notificacion } from 'src/app/models/notificacion';
import { Usuario } from 'src/app/models/usuario';
import { AnimalesService } from 'src/app/modules/animales/services/animales.service';
import { UsuariosService } from 'src/app/modules/usuario/services/usuarios.service';
import { NotificacionesService } from '../../services/notificaciones.service';

@Component({
  selector: 'app-notificacion-item',
  templateUrl: './notificacion-item.component.html',
  styleUrls: ['./notificacion-item.component.css']
})
export class NotificacionItemComponent {
  @Input() notificacion!: Notificacion | null
  usuario!: Usuario
  animal!: Animal
  mostrarDatosAdoptante: boolean = false
  
  constructor(public usuariosService: UsuariosService, private animalesService: AnimalesService, public notificacionesService: NotificacionesService){}
  
  ngOnChanges(){
    this.usuariosService.getUser(this.notificacion!.idUsuarioAdoptante).subscribe(user => this.usuario = user!)

    this.animalesService.getAnimal(this.notificacion!.idAnimal).subscribe(animal => this.animal = animal)
  }
}
