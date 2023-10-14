import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  standalone: true,
  imports: [CommonModule,RouterModule],

  templateUrl: './nav-link.component.html',
  styles: [

  ]

})

export class NavLinkComponent {

  @Input()
  active: boolean=false;
  @Input() link:string='home';

  classes:string='inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-300 text-sm font-medium leading-5 text-gray-900 dark:text-white focus:outline-none focus:border-indigo-700 transition';

  ngOnInit(){
    this.setCurrentStyles();

  }
  setCurrentStyles() {

    this.classes =this.active===true?this.classes:'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-200 dark:hover:text-indigo-300 hover:text-indigo-400 dark:hover:border-indigo-200  hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition';
  }


}
