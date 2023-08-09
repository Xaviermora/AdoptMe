import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PrimaryButtonComponent,
    ButtonComponent
  ],
  exports: [
    NavbarComponent,
    PrimaryButtonComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
