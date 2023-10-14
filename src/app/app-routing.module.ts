import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Views/Shared/Auth/register/register.component';
import { LoginComponent } from './Views/Shared/Auth/login/login.component';
import { HomeComponent } from './Views/Shared/home/home.component';
import { isEmployeeGuard } from './Guards/is-employee.guard';
import { AddRoomComponent } from './Views/Config/add-room/add-room.component';

export const routes: Routes = [


  { path: 'home', component:HomeComponent },
    // { path: 'dashboard', component:DashboardComponent },
    { path: 'add-room', component:AddRoomComponent },

     { path: 'register', component:RegisterComponent },
     { path: 'login', component:LoginComponent },
     { path: '**', component:HomeComponent },
     {path: '', redirectTo: '/home', pathMatch: 'full'},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
