import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarPackageComponent } from "../side-bar-package/side-bar-package.component";
import { Router } from '@angular/router';
import { Category } from '../../../Interfaces/category';
import { CategoryService } from '../../../Services/Shared/category.service';

@Component({
    selector: 'app-recursive-link',
    standalone: true,
    templateUrl: './recursive-link.component.html',
    styles: [],
    imports: [CommonModule, SideBarPackageComponent]
})
export class RecursiveLinkComponent {
  // screens:Category[]=[];
  locale: string='en';
  url:string='/';
  activeMain=signal<string>('');
  @Input()activeRoot:string='RootPro';
  constructor(private router:Router,protected categoryservice:CategoryService){

  }

  getScreens(code:string):Category[]{
    if (!code) {
      return  [];
   }
   return this.categoryservice.getCategoryChildren(code);

  }

  getCategoryByCode(code: string): Category | undefined {
    return this.categoryservice.getCategoryByCode(code);
  }

  getCategoryByUrl(url: string): Category | undefined {
    return this.categoryservice.getCategoryByUrl(url);
  }

  isMainActive(code:string):boolean{
    let Active=this.getCategoryByCode(this.activeMain());
    let father=this.getCategoryByCode(Active?.father??'')
    let grandFather=this.getCategoryByCode(father?.father??'')
    return this.activeMain()==code||
    Active?.father==code||
    father?.father==code||
    grandFather?.father==code||
    this.getCategoryByUrl(this.router.url)?.father==code;
    // this.getCategoryByCode(this.getCategoryByCode(this.activeMain())?.father??'')?.father==code||
  }
  isActive(route:string):boolean{

    return this.router.isActive(route,{paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'});
  }

setActive(code:string){

   this.activeMain.set(code);
   this.categoryservice.setActive(this.router.url);
  //  this.categoryservice.active.set(this.categoryservice.getCategoryByUrl(this.router.url)??this.categoryservice.active());

}
}
