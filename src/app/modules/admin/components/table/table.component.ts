import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  usuarioCollection: Usuario [] = [];

  usuarioSelect!: Usuario;

  usuario: any;

  modalVisibleUser: boolean = false;

  constructor(public servicioCrud:CrudService){
    
  }

  ngOnInit(): void{
  

    this.servicioCrud.getUserCollection().subscribe(data => {this.usuario = data;
    })
  }

  // Eliminar usuario
  ShowDelete(UsuarioSelect: Usuario){
    this.modalVisibleUser = true
    this.usuarioSelect = this.usuarioSelect;
  }

  deleteUser(){
    this.servicioCrud.borrarUser(this.usuarioSelect.uid).then(respuesta =>{
      alert("Se elimino el usuario correctamente")
    })
    .catch(error =>{
      alert("No se pudo borrar el usuario "+ error)
    })
  }
}
