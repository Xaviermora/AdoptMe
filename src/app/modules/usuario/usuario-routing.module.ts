import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './pages/perfil/perfil/perfil.component';
import { ConfigComponent } from './pages/config/config.component';

const routes: Routes = [
  {
    path: 'perfil' ,
    component: PerfilComponent
  },
  {
    path: 'configuracion',
    component: ConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
