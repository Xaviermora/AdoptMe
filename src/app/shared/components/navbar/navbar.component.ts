import { Component } from '@angular/core';
import { Collapse, Dropdown } from 'flowbite';
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

  ngOnInit(){
    // Funcionalidad para el menu del navbar responsive
    const $targetMenuNavEl = document.getElementById('menu')
    
    new Collapse($targetMenuNavEl);

    this.authService.getUserInSession().subscribe(user => this.user = user)

    // Funcionalidad para el dropdown
    const $targetDropdownEl = document.getElementById('dropdown')
    const $triggerDropdownEl = document.getElementById('dropdownButton')

    new Dropdown($targetDropdownEl, $triggerDropdownEl)
  }
}
