import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Dropdown } from 'flowbite';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent{
  configOptionsOpen: boolean = false

}
