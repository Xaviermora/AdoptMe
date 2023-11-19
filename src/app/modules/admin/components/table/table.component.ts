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

  constructor(public servicioCrud:CrudService){
    
  }

  ngOnInit(): void{
    /*this.servicioCrud.getUser().subscribe( usuario => {
      this.usuarioCollection = usuario;
    }) */

    this.servicioCrud.getUserCollection().subscribe(data => {this.usuario = data;
    })
  }
}
