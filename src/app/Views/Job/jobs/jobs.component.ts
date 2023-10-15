import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Loading } from 'src/app/lib/Classess/loading';
import { Job } from 'src/app/Classes/job';
import { TableComponent } from "../../../lib/Views/Components/table/table.component";
import { BackEndService } from 'src/app/Services/Shared/back-end.service';
import { JobService } from 'src/app/Services/Shared/job.service';

@Component({
    selector: 'app-jobs',
    standalone: true,
    templateUrl: './jobs.component.html',
    imports: [CommonModule, TableComponent]
})
export class JobsComponent {


  data=new Loading<Job>();

  constructor(private backEndService:BackEndService<Job>,private jobService:JobService){
    this.data.load(this.backEndService.fetch('/jobs'));
  }

  apply(id:number){
    this.jobService.apply(id);
  }


}
