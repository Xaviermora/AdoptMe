import { AfterViewInit, Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Modal } from 'flowbite';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-config-seguridad',
  templateUrl: './config-seguridad.component.html',
  styleUrls: ['./config-seguridad.component.css']
})
export class ConfigSeguridadComponent implements AfterViewInit{
  modal!: Modal
  email = new FormControl('', Validators.required)
  emailSended: boolean = false
  loading: boolean = false

  constructor(private authService: AuthService){}

  ngAfterViewInit(){
    const $targetEl = document.getElementById('modalEliminarCuenta')
    this.modal = new Modal($targetEl)
  }

  async resetPassword(){
    if (this.email.value) {
      this.loading = true
      await this.authService.resetPassword(this.email.value!)
      this.loading = false
    }

    this.emailSended = true
  }
}
