import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './link.component.html',
  styles: [
  ]
})
export class LinkComponent {


  @Input()
  active: boolean=false;
  @Input() link:string='home';
  local: string='en';

  constructor(){
     this.local=localStorage.getItem("locale")??'en';
  }

  style(){

      return {'text-indigo-700 dark:text-gray-50 border-indigo-400 bg-indigo-50 dark:bg-indigo-200 focus:text-indigo-800 focus:bg-indigo-100 focus:border-slate-700':this.active,
              'text-blue-900 ring-1 ring-indigo-100 dark:ring-gray-700  dark:text-gray-50 border-gray-300 dark:border-indigo-100 bg-slate-100 dark:bg-gray-950   hover:text-indigo-900 dark:hover:text-blue-900 hover:bg-indigo-100 dark:hover:bg-indigo-100 hover:border-blue-900 dark:hover:border-indigo-900 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300':!this.active,
              'border-l-4 rounded-tr-lg rounded-br-lg':this.local=='en',
              'border-r-4  rounded-tl-lg rounded-bl-lg':this.local=='ar',
            }

  }

}
