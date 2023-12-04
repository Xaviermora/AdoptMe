import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Dropdown } from 'flowbite';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/modules/auth/services/auth.service';
import { UsuariosService } from 'src/app/modules/usuario/services/usuarios.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements AfterViewInit{
  configOption: string = 'Perfil público'
  usuario!: Usuario

  constructor(private authService: AuthService, private usuariosService: UsuariosService){}

  async ngOnInit(){
    let uid = await this.authService.getCurrentUid() // Se obtiene la id del usuario en sesión

    this.usuariosService.getUser(uid!).subscribe(usuario => this.usuario = usuario!) // Se obtiene al usuario en sesión
  }

  ngAfterViewInit(){
    const $targetDropdownEl = document.getElementById('configOptions')
    const $triggerDropdownEl = document.getElementById('configOptionsTrigger')

    new Dropdown($targetDropdownEl, $triggerDropdownEl)
  }
}
