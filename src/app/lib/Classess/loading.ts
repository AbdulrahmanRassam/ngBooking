import { Observable, take, catchError } from "rxjs";
import { AlertService } from "../Services/Shared/alert.service";
import { inject } from "@angular/core";

export class Loading<T> {
  data: T[] =[] ;
  isLoading = false;
  noMore = false;
  hasError = false;

   private action$: Observable<T[]> | undefined;
// constructor(actionx$: Observable<T[]>){
//   this.isLoading = true;
//   this.hasError = false;
//   this.action$ = actionx$;


//  this.action$
//    .pipe(
//      catchError(() => {
//        console.log(' There is an Error')
//        this.data = [];
//        this.isLoading = false;
//        this.hasError = true;
//        return [];
//      })
//    )
//    .subscribe((data: T[]) => {

//      this.data = data;
//      // console.log(' loading ... '+JSON.stringify(this.data));
//      // alert(JSON.stringify(this.data))

//      this.isLoading = false;
//      this.hasError = false;
//    });

// }
   load(action$: Observable<T[]>): void {
     this.isLoading = true;
     this.hasError = false;
     this.action$ = action$;


    this.action$
      .pipe(
        catchError(() => {
          console.log(' There is an Error')
          this.data = [];
          this.isLoading = false;
          this.hasError = true;
          return [];
        })
      )
      .subscribe((data: T[]) => {

        this.data = data;
        // console.log(' loading ... '+JSON.stringify(this.data));
        // alert(JSON.stringify(this.data))

        this.isLoading = false;
        this.hasError = false;
      });
  }
}


/*
import { Observable, take, catchError } from "rxjs";

export class Loading<T> {
  data: T[] =[] ;
  isLoading = false;
  noMore = false;
  hasError = false;
  private action$: Observable<T> | undefined;

  load(action$: Observable<T>): void {
    this.isLoading = true;
    this.hasError = false;
    this.action$ = action$;
    this.action$
      .pipe(

        // take(1),
        catchError(() => {
          console.log(' There is an Error')
          this.data = [];
          this.isLoading = false;
          this.hasError = true;
          return [];
        })
      )
      .subscribe((data: any) => {

        this.data = data;
        console.log(' loading ... '+JSON.stringify(this.data));
        // alert(JSON.stringify(this.data))

        this.isLoading = false;
        this.hasError = false;
      });
  }
}


*/
