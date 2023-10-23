import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarEnAdopcionRoutingModule } from './dar-en-adopcion-routing.module';
import { DarEnAdopcionFormComponent } from './pages/dar-en-adopcion-form/dar-en-adopcion-form.component';
import { SharedModule } from "../../shared/shared.module";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DarEnAdopcionFormComponent
    ],
    imports: [
        CommonModule,
        DarEnAdopcionRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class DarEnAdopcionModule { }
