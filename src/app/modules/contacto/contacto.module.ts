import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextoComponent } from './components/texto/texto.component';


@NgModule({
  declarations: [
    ContactoComponent,
    TextoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    SharedModule
  ]
})
export class ContactoModule { }
