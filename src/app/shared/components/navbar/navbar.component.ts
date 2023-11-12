import { Component } from '@angular/core';
import { Collapse, Dropdown } from 'flowbite';
import { UsuariosService } from '../../services/usuarios.service';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuIsActive: boolean = false
  user!: any
  dropdownUser!: Dropdown

  constructor(public authService: AuthService, public usuariosService: UsuariosService, private router: Router){}

  ngOnInit(){
    // Funcionalidad para el menu del navbar responsive
    const $targetMenuNavEl = document.getElementById('menu')

    new Collapse($targetMenuNavEl);

    this.authService.user.subscribe(user => {
      this.user = user // Se obtiene al usuario que esta en la sesión

      // Funcionalidad para el dropdown
      const $targetDropdownEl = document.getElementById('dropdownUserMenu')
      const $triggerDropdownEl = document.getElementById('dropdownBtnUserMenu')

      this.dropdownUser = new Dropdown($targetDropdownEl, $triggerDropdownEl)
    })
  }

  logout(){
    this.authService.signOut().then(() => {
      this.dropdownUser.hide()
      this.router.navigate(['/login'])
    })
  }
}
