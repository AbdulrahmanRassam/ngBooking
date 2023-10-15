import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Injectable({providedIn:'root'})


class AuthGuard{
  constructor(private auth:AuthService){}
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      if (this.auth.isAuthenticated()) {
        return true
      }else{
        return false
      }
  }

}

export const isAuthGuard: CanActivateFn = (route, state) => {

  return inject(AuthGuard).canActivate(route,state);
};
