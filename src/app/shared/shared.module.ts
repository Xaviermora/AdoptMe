import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { DividerComponent } from './components/divider/divider.component';
import { SearchSelectComponent } from './components/search-select/search-select.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    SearchSelectComponent,
    FilterPipe
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    SearchSelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
