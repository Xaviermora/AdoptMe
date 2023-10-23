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
<<<<<<< HEAD
    loadChildren: ()=>import('./modules/dar-en-adopcion/dar-en-adopcion.module').then(m => m.DarEnAdopcionModule)
=======
    loadChildren: () => import('./modules/contacto/contacto.module').then(m => m.ContactoModule)
>>>>>>> e1f25223a98ec40dc120a64b1506320fe86298ab
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
