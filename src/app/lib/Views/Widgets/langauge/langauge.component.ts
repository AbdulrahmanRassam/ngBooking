import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ButtonComponent } from "../../Components/button/button.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-langauge',
    standalone: true,
    templateUrl: './langauge.component.html',
    styles: [],
    imports: [CommonModule, ButtonComponent]
})
export class LangaugeComponent {
    locale:string='en';

  constructor(@Inject(DOCUMENT) private document: Document) {

      this.locale= localStorage.getItem('locale')??'ar';

  }

changeLangage(lang: string) {

  this.locale=lang;
   let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
// this.translateService.setDefaultLang(lang);
// this.translateService.use(lang);
localStorage.setItem('locale',lang);
window.location.reload();

// this.router.navigate(['home']);
}
}
