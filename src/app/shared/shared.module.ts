import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { DividerComponent } from './components/divider/divider.component';
import { FooterComponent } from './components/footer/footer.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    FooterComponent,
    TextareaComponent
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    FooterComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
