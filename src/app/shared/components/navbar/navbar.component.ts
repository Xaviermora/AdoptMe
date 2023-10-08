import { Component } from '@angular/core';
import { Collapse } from 'flowbite';
import { UsuariosService } from '../../services/usuarios.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuIsActive: boolean = false
  user!: any

  constructor(public authService: AuthService, public usuariosService: UsuariosService){}

  async ngOnInit(){
    const $targetEl = document.getElementById('menu')
    new Collapse($targetEl);

    this.authService.getUserInSession().subscribe(user => this.user = user)
  }
}
