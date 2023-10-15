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
protected token=signal<string>('eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMjdhMmQ2YzE4MzVkYWJmMGU0Y2U4YjY1N2UwYzg5M2ZlYTNlZDQwOTcyYjE0NGUzMzc0ZTc0NTNhZTM5ZmJlNDAyNTAyNTY1ZTU0ZDQzMjciLCJpYXQiOjE2OTczNjI5NjEuMzAyMTE0LCJuYmYiOjE2OTczNjI5NjEuMzAyMTIxLCJleHAiOjE3Mjg5ODUzNjEuMjM5NDM5LCJzdWIiOiIzNSIsInNjb3BlcyI6W119.i-7Cb5a_mBGG9IBwFM54X10qamuKAnTydfF2RoIt6LWU6nW77g1dUt_CZX8U91mb5nu8YXbnACIYCVPNIxNAol0hDcz0UNWq6R1IrCNYAPukjKrpeoG85w3118ck71UdB7-uvbsHZ0fGlkCnr2eqjhaschgLjOdIyMPohkY8OKea3v1ZRJgQFAUsKIsk_aOmt4fUo5Y-X0lvHOdTT0BXTAiHhGYktk1OUKF5fWFBf3089R2hyDhIHqlAIWdcAad5DTTlrZ7q_xGB2kmwCFZY_rznmwQCBkvcAjyPS55SowzCE4b_uTZh2x2-UZJE54GSfcEqEC-MFTgIK-bxrTWU0WEiJe2dCVvaeBWJq0XAJWDgPIaWamKvRjJS6t0jUoMKWSiCHCQmdCkJldCyhsnt9ZObn01yk5palMxGBeeDcGWBlXR0ut9LNNISW8rPz6mCPPbnt1lS0gHw2Zvd9ycimLIDAHCL2oeESDwuglyJ22Qeyd48GYbSD0ChScE33fs7drE1PJtG5ByYzOSTLcrH73cg5n2Ij42_URiZH10cIXQq07VMZjyp_stHvmJzBE4rIqW3Z5OhNDTgseiK26sLsfDCKAbFxfzDZgyDZWq-K1Nae1bZQnbJBdtESYsfn4NGgMXi94fi3f2KrhcM2fEMRl551Pq33a2dV3xveo7vZts');

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
