import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { DividerComponent } from './components/divider/divider.component';
import { SearchSelectComponent } from './components/search-select/search-select.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputComponent } from './components/input/input.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    SearchSelectComponent,
    FilterPipe,
    InputRadioComponent,
    InputComponent,
    InputCheckboxComponent,
    SelectComponent
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    SearchSelectComponent,
    InputRadioComponent,
    InputComponent,
    InputCheckboxComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
