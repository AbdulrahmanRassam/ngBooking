import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Views/Shared/Auth/register/register.component';
import { LoginComponent } from './Views/Shared/Auth/login/login.component';
import { HomeComponent } from './Views/Shared/home/home.component';
import { isEmployeeGuard } from './Guards/is-employee.guard';
import { AddRoomComponent } from './Views/Config/add-room/add-room.component';
import { RequestsComponent } from './Views/Booking/requests/requests.component';
import { JobsComponent } from './Views/Job/jobs/jobs.component';
import { AddJobComponent } from './Views/Config/add-job/add-job.component';
import { JobRequestsComponent } from './Views/Job/job-requests/job-requests.component';
import { isAuthGuard } from './Guards/auth.guard';

export const routes: Routes = [


  { path: 'home', component:HomeComponent },
    { path: 'jobs', component:JobsComponent },
    { path: 'add-job', component:AddJobComponent,canActivate:[isEmployeeGuard] },
    { path: 'job-requests', component:JobRequestsComponent,canActivate:[isAuthGuard] },


    { path: 'booking-requests', component:RequestsComponent,canActivate:[isAuthGuard] },
    { path: 'add-room', component:AddRoomComponent ,canActivate:[isEmployeeGuard]},

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
