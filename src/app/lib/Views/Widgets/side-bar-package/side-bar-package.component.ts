import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkComponent } from "../../Components/link/link.component";
import { Category } from '../../../Interfaces/category';

@Component({
    selector: 'app-side-bar-package',
    standalone: true,
    templateUrl: './side-bar-package.component.html',
    styles: [],
    imports: [CommonModule, LinkComponent]
})
export class SideBarPackageComponent {
  @Input()
  screen!: Category;
@Input() active:boolean=true;
@Input() isActive:boolean=true;
@Output() onClick = new EventEmitter<any>();
locale: string='en';
ngOnInit(){
  this.locale=localStorage.getItem("locale")??'en';
}
style(){

  return {
    'border-r rounded-tr-lg rounded-br-lg pr-2 hover:border-r-4 ':this.locale=='en',
    'border-l rounded-tl-lg rounded-bl-lg pl-2 hover:border-l-4 ':this.locale=='ar',
  }
}

setActiveEvent(event: any){
  this.onClick.emit(event);
}
}
