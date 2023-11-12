import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/card/modal/modal.component';
import { SharedModule } from "../../shared/shared.module";
import { AnimalesComponent } from './pages/animales/animales.component';
import { FiltrosComponent } from './pages/filtros/filtros.component';
import { ModalReportarUsuarioComponent } from './components/card/modal-reportar-usuario/modal-reportar-usuario.component';
import { ModalReportarPublicacionComponent } from './components/card/modal-reportar-publicacion/modal-reportar-publicacion.component';
import { DarEnAdopcionComponent } from './pages/dar-en-adopcion/dar-en-adopcion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        CardComponent,
        ModalComponent,
        FiltrosComponent,
        AnimalesComponent,
        ModalReportarUsuarioComponent,
        ModalReportarPublicacionComponent
        DarEnAdopcionComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AnimalesRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class AnimalesModule { }
