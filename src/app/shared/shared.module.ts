import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { DividerComponent } from './components/divider/divider.component';
import { SearchSelectComponent } from './components/search-select/search-select.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputRadioComponent } from './components/input-radio/input-radio.component';
import { InputComponent } from './components/input/input.component';
import { InputCheckboxComponent } from './components/input-checkbox/input-checkbox.component';
import { InputPhoneComponent } from './components/input-phone/input-phone.component';
import { SelectComponent } from './components/select/select.component';
import { ToastComponent } from './components/toast/toast.component';
import { SpinnerLoadingComponent } from './components/spinner-loading/spinner-loading.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { TextareaComponent } from './components/textarea/textarea.component';
>>>>>>> e1f25223a98ec40dc120a64b1506320fe86298ab

@NgModule({
  declarations: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    TextareaComponent,
    SearchSelectComponent,
    FilterPipe,
    InputRadioComponent,
    InputComponent,
    InputCheckboxComponent,
    InputPhoneComponent,
    SelectComponent,
    ToastComponent,
    SpinnerLoadingComponent,
    FooterComponent
  ],
  exports: [
    NavbarComponent,
    ButtonComponent,
    DividerComponent,
    TextareaComponent,
    SearchSelectComponent,
    FilterPipe,
    InputRadioComponent,
    InputComponent,
    InputCheckboxComponent,
    InputPhoneComponent,
    SelectComponent,
    ToastComponent,
    SpinnerLoadingComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
