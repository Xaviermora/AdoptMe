import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './pages/animales/animales.component';
import { DarEnAdopcionComponent } from './pages/dar-en-adopcion/dar-en-adopcion.component';

const routes: Routes = [
  {
    path: 'animales' ,
    component: AnimalesComponent
  },
  {
    path: 'dar-en-adopcion',
    component: DarEnAdopcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalesRoutingModule { }
