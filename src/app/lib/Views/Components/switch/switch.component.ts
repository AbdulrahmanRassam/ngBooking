import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-switch',
    templateUrl: './switch.component.html',
    styles: [],
    standalone: true,
    imports: [NgClass]
})
export class SwitchComponent {

  checked:boolean=false;
  style(){
      return {
        'right-0 border-green-400 bg-green-600 right-0':!this.checked
      }
  }

}
