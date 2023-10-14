import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styles: [
  ]
})
export class ButtonComponent {
  @Output() onClick = new EventEmitter<any>();
@Input() isLoading:boolean=false;
@Input() disabled:boolean=false;

  onClickButton(event: any) {
    this.isLoading =true;
     setTimeout(() => {
      this.isLoading = false;
    }, 5000);
      this.onClick.emit(event);
    }
}
