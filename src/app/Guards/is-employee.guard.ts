import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';
@Injectable({providedIn:'root'})

class EmployeeGuard{
  constructor(private auth:AuthService){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      if (this.auth.isAuthenticated()&&(this.auth.user().role=='Admin'||this.auth.user().role=='Employee')) {
        return true
      }else{
        return false
      }
  }

}

export const isEmployeeGuard: CanActivateFn = (route, state) => {

  return inject(EmployeeGuard).canActivate(route,state);
};
