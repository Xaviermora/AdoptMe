import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalesComponent } from './pages/animales/animales.component';

const routes: Routes = [
  {
    path: '' ,
    component: AnimalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalesRoutingModule { }
