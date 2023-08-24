import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,

  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
