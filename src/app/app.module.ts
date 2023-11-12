import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SharedModule } from './shared/shared.module';

//FIREBASE
import { environment } from 'src/enviroments/enviroment';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireAuthModule} from '@angular/fire/compat/auth'
import {AngularFireStorageModule} from '@angular/fire/compat/storage'
import { AuthService } from './modules/auth/services/auth.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    //Modulos de firebase
    AngularFireModule.initializeApp(environment.firebaseConfig), // INICIALIZA FIREBASE
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  providers: [{
    /* Se ejecuta cuando la app se esta inicializando */
    provide: APP_INITIALIZER,
    useFactory: (authSvc: AuthService) => async () => await new Promise(resolve => authSvc.user.subscribe(user => resolve(user))), // Se espera a que el usuario, si es que esta en sesión, esté listo
    deps: [AuthService],
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
