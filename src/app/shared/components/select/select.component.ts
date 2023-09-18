import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent {
  @Input() idSelect!: string
  @Input() label!: string
  @Input() list!: string[]
  valueSelect!: string
}
