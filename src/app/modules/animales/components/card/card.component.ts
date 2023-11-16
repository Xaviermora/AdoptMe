import { Dropdown, Modal } from 'flowbite';
import { Component, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Animal } from 'src/app/models/animal';
import { Usuario } from 'src/app/models/usuario';
import { UsuariosService } from 'src/app/shared/services/usuarios.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnDestroy{
  @Input() animal!: Animal
  modal!: Modal
  imgActual: number = 0 // Posición de la imagen que se esta mostrando en el carousel
  dueno!: Usuario 
  modalReportarPublicacion!: Modal
  modalReportarUsuario!: Modal

  constructor(private usuariosService: UsuariosService){}

  async ngOnInit(){
    this.usuariosService.getUser(this.animal.userId).subscribe(user => this.dueno = user!)
  }

  ngAfterViewInit(){
    // Se hace uso del setTimeot para evitar el error "Expression has changed after it was checked"
    setTimeout(() => { 
      const $modalReportarPublicacion = document.getElementById(`modal-reportar-publicacion-${this.animal.id}`)
      this.modalReportarPublicacion = new Modal($modalReportarPublicacion)
  
      const $modalReportarUsuario = document.getElementById(`modal-reportar-usuario-${this.animal.id}`)
      this.modalReportarUsuario = new Modal($modalReportarUsuario)
  
      const $targetDropdownEl = document.getElementById(`dropdownCard-${this.animal.id}`)
      const $triggerDropdownEl = document.getElementById(`dropdownBtnCard-${this.animal.id}`)
      new Dropdown($targetDropdownEl, $triggerDropdownEl)

      const $targetEl = document.getElementById(`modal-${this.animal.id}`);
      this.modal = new Modal($targetEl);
    }, 0)
  }

  ngOnDestroy(){
    // Se soluciona bug de que un modal quede abierto y despues no se pueda sacar cuando los animales cambian por los filtros
    if(this.modal.isVisible()) this.modal.hide()
  }

  movimientoImgs(){
    this.animal.imgs.forEach((_: any, i: number) => {
      let img = document.getElementById(`${this.animal.id}-img-${i}`) // Se obtiene la imagen

      img!.style.transform = `translateX(-${(this.imgActual)*100}%)` // Se aplica el estilo a la imagen para que se mueva hacia un costado
    })
  }

  anteriorImg(){
    this.imgActual -= 1

    this.movimientoImgs()
  }

  siguienteImg(){
    this.imgActual += 1

    this.movimientoImgs()
  }
}
