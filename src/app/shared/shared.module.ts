import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimaryButtonComponent } from './components/buttons/primary-button/primary-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    PrimaryButtonComponent
  ],
  exports: [
    NavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
