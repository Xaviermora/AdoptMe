import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
clearSearch() {
throw new Error('Method not implemented.');
}

  usuarioCollection: Usuario [] = [];

  

  usuario: any;


  usuarioSelect!: Usuario;
  modalVisibleUser: boolean = false;
  showEditModal: boolean = false;
  constructor(public servicioCrud:CrudService){
    
  }

  ngOnInit(): void{
  

    this.servicioCrud.getUserCollection().subscribe(data => {this.usuario = data;
    })
  }
  //Editar usuario
  openEditModal(usuarioSelect: Usuario) {
    this.usuarioSelect = usuarioSelect;
    
    // Llenar el formulario con los datos del usuario
   
    
    this.showEditModal = true;  
  }

  closeEditModal() {
    this.showEditModal = false;
  }

  // Eliminar usuario
  ShowDelete(UsuarioSelect: Usuario){
    this.modalVisibleUser = true
    this.usuarioSelect = UsuarioSelect
  }

  closeDelete(){
    this.modalVisibleUser = false
  }

  deleteUser(uid: string){
    this.servicioCrud.borrarUser(this.usuarioSelect.uid).then(respuesta =>{
      alert("Se elimino el usuario correctamente")
    })
    .catch(error =>{
      alert("No se pudo borrar el usuario "+ error)
    })
    this.modalVisibleUser = false
    
  }
  
}
