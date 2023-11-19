import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { userExistsInCollection, userInSession, userNotInSession } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: '',
    loadChildren:()=>import('./modules/animales/animales.module').then(m => m.AnimalesModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/contacto/contacto.module').then(m => m.ContactoModule)
  },
  {
    path:'',
    loadChildren:()=>import('./modules/usuario/usuario.module').then(m =>m.UsuarioModule),
    canActivate: [userInSession, userExistsInCollection]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
