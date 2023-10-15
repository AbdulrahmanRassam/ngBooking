import { Injectable } from '@angular/core';
import { Loading } from 'src/app/lib/Classess/loading';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';
import { AuthService } from '../auth.service';
import { BackEndService } from './back-end.service';
import { Apply } from 'src/app/Classes/apply';
import { Job } from 'src/app/Classes/job';
import { Category } from 'src/app/lib/Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  data:Apply=new Apply;

  requests=new Loading<Apply>;
    categories:string[]=[];
  constructor(private alert:AlertService,private auth:AuthService ,private backendService:BackEndService<Apply>,private backService:BackEndService<Category>) { }

  Add(data:any){
    this.backendService.post('/add-job',data).subscribe(
      res=>{
        return res;
      }
    )
  }

  getCategories(){

    return this.backService.fetch('/categories').subscribe(
      res=>{
         res.map(res=>this.categories.push(res.name));
      }
    )
  }

  apply(id:number){

    if(this.auth.isAuthenticated()){

      this.data.user_id=this.auth.user().id;
      this.data.job_id=id;
      this.backendService.post('/job-apply',this.data).subscribe(
        res=>{
          this.alert.alert('Apply','Job Applied Successfully')
          return res;
        }
      )
    }else{
      this.alert.alert('Apply','You should Login Befor Apply')

    }
  }
  accept(apply:Apply){

    this.backendService.post('/accept-job-request/'+apply.id,{}).subscribe(
      res=>{
        this.alert.alert('Accepted',apply.user+'\' Apply Accepted Successfully')

        return res;
      }
    )
  }
  reject(apply:Apply){

    this.backendService.post('/reject-job-request/'+apply.id,{}).subscribe(
      res=>{
        this.alert.alert('Accepted',apply.user+'\' Apply Rejected Successfully')

        return res;
      }
    )
  }

  getRequests(){
   this.requests.load(this.backendService.fetch('/jobs-applied'));
  }

}
