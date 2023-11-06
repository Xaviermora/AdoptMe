import { Component, Input } from '@angular/core';
import { Modal } from 'flowbite';
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() animal!: Animal
  @Input() modal!: Modal
}
