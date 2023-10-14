import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CategoryService } from 'src/app/lib/Services/Shared/category.service';
import { LinkComponent } from 'src/app/lib/Views/Components/link/link.component';
import { RecursiveLinkComponent } from 'src/app/lib/Views/Widgets/recursive-link/recursive-link.component';
import { SideBarPackageComponent } from 'src/app/lib/Views/Widgets/side-bar-package/side-bar-package.component';
import { ThemeComponent } from 'src/app/lib/Views/Widgets/theme/theme.component';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  templateUrl: './side-bar.component.html',
  styles: [],
  imports: [CommonModule, LinkComponent, ThemeComponent, SideBarPackageComponent, RecursiveLinkComponent]

})
export class SideBarComponent {
  user=this.auth.user;
  locale: string='en';
  active=this.categoryservice.active;
  isAuth=this.auth.isAuthenticated;
  local: string;
  title: string='Home';

  constructor(private alert:AlertService,private router:Router,private auth:AuthService,protected categoryservice:CategoryService){
    this.local=localStorage.getItem("locale")??'en';
     console.log(' Url '+this.router.url+'   url = '+this.active);
    this.categoryservice.setActive(this.router.url);
      this.setTitle();

  }

  setTitle(){
   this.title=this.locale=='en'?(this.active().name):(this.active()!.arName)
  }
  style(){

    return {
      'border-r rounded-tr-lg rounded-br-lg pr-2 hover:border-r-4 ':this.locale=='en',
      'border-l rounded-tl-lg rounded-bl-lg pl-2 hover:border-l-4 ':this.locale=='ar',
    }
  }
  isActive(route:string):boolean{

    return this.router.isActive(route,{paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'});
  }


logoutStyle(){

    return {
            'border-l-4 rounded-tr-lg rounded-br-lg':this.local=='en',
            'border-r-4  rounded-tl-lg rounded-bl-lg':this.local=='ar',
          }

}

logoutx(){
  this.auth.logout();
 }
}
