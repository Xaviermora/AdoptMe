import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalesRoutingModule } from './animales-routing.module';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/card/modal/modal.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
    declarations: [
        CardComponent,
        ModalComponent
    ],
    imports: [
        CommonModule,
        AnimalesRoutingModule,
        SharedModule
    ]
})
export class AnimalesModule { }
