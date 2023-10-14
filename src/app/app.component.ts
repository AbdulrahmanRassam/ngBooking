import { Component, Inject } from '@angular/core';
import { CategoryService } from './lib/Services/Shared/category.service';
import { Category } from '../app/lib/Interfaces/category'
import { categories } from './Classes/consts';
import { DOCUMENT } from '@angular/common';
// import { categories } from './Classes/consts'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onSubmit($event: Event) {
throw new Error('Method not implemented.');
}
  title = 'ngBooking';
getFormFields: any;

constructor(@Inject(DOCUMENT) private document: Document  ,private categoryService:CategoryService){
  let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
  let local=localStorage.getItem("locale")??'en';
  htmlTag.dir = local === "ar" ? "rtl" : "ltr";

  let theme= localStorage.getItem('theme')??'light';
  this.document.documentElement.classList.remove(theme=='light'?'dark':'light');
  this.document.documentElement.classList.add(theme);
  localStorage.setItem('theme',theme);
  console.log(' App  Launched');
  categoryService.setData(categories);


}


}
