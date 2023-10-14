import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonComponent } from 'src/app/lib/Views/Components/button/button.component';
import { NavLinkComponent } from 'src/app/lib/Views/Components/nav-link/nav-link.component';
import { LangaugeComponent } from 'src/app/lib/Views/Widgets/langauge/langauge.component';
import { ThemeComponent } from 'src/app/lib/Views/Widgets/theme/theme.component';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styles: [],
    imports: [CommonModule, NavLinkComponent, ButtonComponent, ThemeComponent, LangaugeComponent]
})
export class NavBarComponent {
  open:boolean=false;

  constructor(private router:Router){

  }


    isActive(route:string):boolean{

      return this.router.isActive(route,{paths: 'exact', queryParams: 'exact', fragment: 'ignored', matrixParams: 'ignored'});
    }
  submit(event:any){
    alert('submited')
  }

}
