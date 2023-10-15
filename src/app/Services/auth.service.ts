import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { User } from '../Classes/user';
import { AuthResponse } from '../lib/Interfaces/iresponse';
import { appConfig, routes } from '../Configs/app';
import { Observable, map, catchError, of } from 'rxjs';
import { AlertService } from '../lib/Services/Shared/alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: string = 'http://localhost:800/api';

public isAuthenticated=signal<boolean>(false);
public user=signal<User>(new User);
protected token=signal<string>('');

  constructor(private http:HttpClient,private alert:AlertService,private router:Router){
}

register(datax:any):Observable<any>{

    return this.http.post<AuthResponse<User>>(appConfig.url+routes.register,datax,appConfig.httpOptions).pipe(

      map((data) =>{

        this.alert.alert('SignUp Successfully',JSON.stringify(data.success),false);

        return  data;
      }
      ),
      catchError(this.handleError())
    );
  }

login(data:any):Observable<any>{

    return this.http.post<AuthResponse<User>>(appConfig.url+routes.login,data,appConfig.httpOptions).pipe(

      map((data) =>{

        this.alert.alert('Login Successfully',JSON.stringify(data.user.name+" Login Successfully"),false);

        return  data;
      }
      ),
      catchError(this.handleError())
    );
  }

signUp(data:any){

 return this.register(data).subscribe(res=>{

   if (res.success===true) {
      this.isAuthenticated.set(true);
      this.setToken(res.token);
      this.user.set(res.user);
    this.router.navigate(['home']);

    }
  })

}
signIn(data:any){

 return this.login(data).subscribe(res=>{

   if (res.success===true) {
      this.isAuthenticated.set(true);
      this.setToken(res.token);
      this.user.set(res.user);
    this.router.navigate(['home']);

    }
  })

}
  logout(): void {

    this.alert.alert('Logout Successfully',this.user.name+"  Logout Successfully",false);
    this.token.set('');
    this.user.set(new User);
    this.isAuthenticated.set(false);
    this.router.navigate(['home']);

  }


  getToken(): string  {
    return  this.token();
  }
  setToken(token: string) {
     this.token.set(token);
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.alert.alert('Failed Loading',`Op: ${operation} failed: ${JSON.stringify(error.error)}`,false)
      console.log('Failed Loading',`Op: ${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }

}
