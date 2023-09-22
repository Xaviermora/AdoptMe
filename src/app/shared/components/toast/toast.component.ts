import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  @Input() severity!: string
  @Input() msg!: string
  @Output() showMsgEvent = new EventEmitter<boolean>()

  closeToast(showMsg: boolean){
    this.showMsgEvent.emit(showMsg)
  }
}
