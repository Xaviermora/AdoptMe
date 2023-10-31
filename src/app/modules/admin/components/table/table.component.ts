import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CrudService } from '../../services/crud.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  usuario: any[];
  constructor(private crudService: CrudService){
    this.usuario = this.crudService.getDatos();
  }


  
}
