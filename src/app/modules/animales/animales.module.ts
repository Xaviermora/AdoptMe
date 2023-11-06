import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/card/modal/modal.component';
import { SharedModule } from "../../shared/shared.module";
import { AnimalesComponent } from './pages/animales/animales.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { DarEnAdopcionComponent } from './pages/dar-en-adopcion/dar-en-adopcion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CardComponent,
        ModalComponent,
        FiltrosComponent,
        AnimalesComponent,
        DarEnAdopcionComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AnimalesRoutingModule,
        SharedModule
    ]
})
export class AnimalesModule { }
