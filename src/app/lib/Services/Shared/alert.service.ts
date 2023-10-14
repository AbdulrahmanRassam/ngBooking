import { Injectable, signal } from '@angular/core';
import { delay } from 'rxjs';
import { Alert } from '../../Classess/alert';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
 isVisable=signal<boolean>(true);
 alertS=signal<Alert>(new Alert('Welcome','welcome in Our Webste'));

 logs=signal<Alert[]>([]);
  alert(title:string,msg:string,status:boolean=true) {
    this.alertS.mutate(v=>{
      v.msg=msg;
      v.title=title;
      v.status=status;
    });
    this.logs.mutate(v=>v.unshift({title,msg,status}))
  }

  constructor() { }
}
