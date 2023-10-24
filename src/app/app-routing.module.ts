import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'animales',
    loadChildren:()=>import('./modules/animales/animales.module').then( m => m.AnimalesModule)
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
    path:'usuario',
    loadChildren:()=>import('./modules/usuario/usuario.module').then(m =>m.UsuarioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
