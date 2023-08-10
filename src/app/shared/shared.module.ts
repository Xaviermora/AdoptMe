import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { DividerComponent } from './components/divider/divider.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
