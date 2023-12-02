import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CrudService } from '../../services/crud.service';
import { FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {


  /*propiedades y metodos de la tabla admin*/

  //Arreglo para almacenar la coleccion de usuarios
  usuarioCollection: Usuario [] = [];

  //Objeto para guardar un usuario
  usuario: any;

  //Usuario seleccionado, tanto para editar como para borrar
  usuarioSelect!: Usuario;

  // se utiliza como una bandera para mostrar o ocultar el modal de delete o edit
  modalVisibleUser: boolean = false;
  showEditModal: boolean = false;

  //Formulario reactivo que se usa para editar nuestro usuario seleccionado
  editForm!: FormGroup
  
  constructor(
    //llamamos a nuestro Servicio CRUD, para utilizarlo y comunicarnos con firestore
    public servicioCrud:CrudService,
    //Llamamos servicio de FormBUilder para construccion de formularios
    private fb: FormBuilder,
    ){
    
  }

  ngOnInit(): void{
    //Construccion del formulario con todos sus campos
    this.editForm = this.fb.group({
      nombre: '',
      email: '',
      ciudad: '',
      dni: 0,
      fechaDeNacimiento: Date,
      tipoDeVivienda: '',
      telefono: 0,
    }) 
    
    //obtencion de usuarios
    this.getUsers()
  }

  //obtiene la coleccion directamente desde el servicio
  getUsers(){
    this.servicioCrud.getUserCollection()
    .subscribe(data => {this.usuario = data;})
  }

  // Metodo para editar usuario


  openEditModal(usuarioSelect: Usuario) {
    //Hace visible el modal
    this.showEditModal = true;
    //Referencia la usuario seleccionado  
    this.usuarioSelect = usuarioSelect
    //Establece o Setea el formulario con los datos del usuario seleccionado
    this.editForm.patchValue(usuarioSelect);
    
  }

  closeEditModal() {
    //Hace invisible el modal
    this.showEditModal = false;
  }

  // Al aceptar los cambios en el modal

  //Metodo para guardar los cambios hechos en el usuario
  updateUser(){
    
    //Obtencion de los nuevos datos desde el formulario
    const  updatedData = this.editForm.value;
    
    //Llamado al servicio para el update, pasandole el UID y los nuevos datos del usuario 
    this.servicioCrud.updateUserCollection(this.usuarioSelect.uid, updatedData)
    //Entonces si fue exitoso cerramos el modal y volvemos a obtener los usuarios (con informacion actualizada)
    .then(() =>{
      
      this.closeEditModal()
      this.getUsers
    })
    //Capturamos errores en caso de que ocurra alguno
    .catch(error => {
      console.log(error);
    })
  }

  // Termina metodo para editar


  //Metodo para eliminar usuario
  ShowDelete(UsuarioSelect: Usuario){
    //Hace visible el modal para confirmar el delete del usuario
    this.modalVisibleUser = true
    //Almacena el objeto del usuario que fue seleccionado para eliminar
    this.usuarioSelect = UsuarioSelect
  }

  closeDelete(){
    //Hace invisible el modal
    this.modalVisibleUser = false
  }

  deleteUser(uid: string){
    //Llama al metodo borrarUser del servicio CRUD
    //Pasa el UID del usuario seleccionado
    this.servicioCrud.borrarUser(this.usuarioSelect.uid)
    //Ante una respuesta satisfactoria al borrar usuario
    .then(respuesta =>{
      alert("Se elimino el usuario correctamente")
    })
    //Ante cualquier error que pueda ocurrir
    .catch(error =>{
      alert("No se pudo borrar el usuario "+ error)
    })
    //Luego cierra el modal
    this.modalVisibleUser = false
    
  }
  
}
