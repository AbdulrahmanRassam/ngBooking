import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LinkComponent } from "./lib/Views/Components/link/link.component";
import { SideBarComponent } from "./Views/Shared/Navs/side-bar/side-bar.component";
import { ButtonComponent } from "./lib/Views/Components/button/button.component";
import { AlertComponent } from "./lib/Views/Widgets/alert/alert.component";
import { FormSectionComponent } from "./lib/Views/Components/form-section/form-section.component";
import { NavBarComponent } from "./Views/Shared/Navs/nav-bar/nav-bar.component";
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from "./Views/Shared/Navs/footer/footer.component";
import { SetBackgroundImageDirective } from './lib/Directives/set-background-image.directive';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        LinkComponent,
        SideBarComponent,
        ButtonComponent,
        AlertComponent,
        FormSectionComponent,
        NavBarComponent,
        FooterComponent,
        SetBackgroundImageDirective

    ]
})
export class AppModule { }
