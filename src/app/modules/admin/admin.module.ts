import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { TableComponent } from './components/table/table.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AdminComponent,
        TableComponent,
        ReportesComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
