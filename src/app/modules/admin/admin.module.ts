import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { TableComponent } from './components/table/table.component';
import { ReportesComponent } from './pages/reportes/reportes.component';


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
