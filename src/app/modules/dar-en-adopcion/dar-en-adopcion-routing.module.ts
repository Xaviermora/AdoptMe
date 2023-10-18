import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DarEnAdopcionFormComponent } from './pages/dar-en-adopcion-form/dar-en-adopcion-form.component';

const routes: Routes = [
  {
    path: "dar-en-adopcion", component:DarEnAdopcionFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DarEnAdopcionRoutingModule { }
