import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
<<<<<<< HEAD
  {path: 'animales',
  loadChildren:()=>import('./modules/animales/animales.module').then( m => m.AnimalesModule)
}
=======
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  }
>>>>>>> 087c8d9abefbfa8bc04bc1120ee8e43c9ef94c09
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
