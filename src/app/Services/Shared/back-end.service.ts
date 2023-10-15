import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { appConfig } from 'src/app/Configs/app';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';
import { AuthService } from '../auth.service';
import { FetchResponse, PostResponse } from 'src/app/lib/Interfaces/iresponse';

@Injectable({
  providedIn: 'root'
})
export class BackEndService<T> {

  httpOptions;
  constructor(private http:HttpClient,private alert:AlertService,private auth:AuthService) {


      this.httpOptions = {
        headers: new HttpHeaders(
            {
              'Accept': 'application/json',
              'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8;application/json',
             'cleint_id': 'gvhcvhgcgcfgcfgghcghcg',
             'key': 'samhKey75fghfvhgcgcgfcgfccxxcc',
             'Authorization':'Bearer '+this.auth.getToken()
            }
          ),


    }
  }


  fetch(url:string):Observable<T[]>{

    this.httpOptions = {
      headers: new HttpHeaders(
          {
            'Accept': 'application/json',
            'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8;application/json',
           'cleint_id': 'gvhcvhgcgcfgcfgghcghcg',
           'key': 'samhKey75fghfvhgcgcgfcgfccxxcc',
           'Authorization':'Bearer '+this.auth.getToken()
          }
        ),
      }

    return this.http.get<FetchResponse<T>>(appConfig.backEndUrl+url,this.httpOptions).pipe(
      map((data) =>{
        this.alert.alert('Loading',data.msg)
          if (data.success===true) {
            return  data.data
          }else{
          return [];
          }
      }
      ),
      catchError(this.handleError<T[]>(url))
    );
  }

  post(url:string,datax:any):Observable<any>{
    this.httpOptions = {
      headers: new HttpHeaders(
          {
            'Accept': 'application/json',
            'Content-Type':  'application/x-www-form-urlencoded; charset=UTF-8;application/json',
           'cleint_id': 'gvhcvhgcgcfgcfgghcghcg',
           'key': 'samhKey75fghfvhgcgcgfcgfccxxcc',
           'Authorization':'Bearer '+this.auth.getToken()
          }
        ),


  }
    return this.http.post<PostResponse<T>>(appConfig.backEndUrl+url,datax,this.httpOptions).pipe(

      map((data) =>{
        this.alert.alert('System ... ',JSON.stringify(data.msg));
        return  data;
      }
      ),
      catchError(this.handleError<T>(url))
    );
  }






  private handleError<T>(operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      this.alert.alert('Failed Loading',`Op: ${operation} failed: ${JSON.stringify(error.error)}`,false)
      console.log('Failed Loading',`Op: ${operation} failed: ${error.message}`)
      return of(result as T);
    };
  }
}
