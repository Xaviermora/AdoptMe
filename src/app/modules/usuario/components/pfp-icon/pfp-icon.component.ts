import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-pfp-icon',
  templateUrl: './pfp-icon.component.html',
  styleUrls: ['./pfp-icon.component.css']
})
export class PfpIconComponent {
  @Input() userIcon!: string;
  @Input() edad!: number;
  @Input() email!: string;
  @Input() usuario!: string;
}
