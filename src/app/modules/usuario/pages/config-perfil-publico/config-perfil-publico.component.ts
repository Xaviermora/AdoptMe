import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-config-perfil-publico',
  templateUrl: './config-perfil-publico.component.html',
  styleUrls: ['./config-perfil-publico.component.css']
})
export class ConfigPerfilPublicoComponent {
  @Input() usuario!: any

}
