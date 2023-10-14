import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ButtonComponent } from "../../Components/button/button.component";

@Component({
    selector: 'app-theme',
    standalone: true,
    templateUrl: './theme.component.html',
    styles: [],
    imports: [CommonModule, ButtonComponent]
})
export class ThemeComponent {
  theme:string='light';


  constructor(@Inject(DOCUMENT) private document: Document) {

    this.theme= localStorage.getItem('theme')??'light';
    console.log(' ThemeComponent  Launched')

}

themeSwitch(theme: string) {

  // if (condition) {

    // }
    this.document.documentElement.classList.remove(this.theme);
    this.document.documentElement.classList.add(theme);
    this.theme=theme;

    localStorage.setItem('theme',theme);

// window.location.reload();

// this.router.navigate(['home']);
}
}
