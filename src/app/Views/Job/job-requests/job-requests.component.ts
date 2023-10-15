import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Apply } from 'src/app/Classes/apply';
import { Loading } from 'src/app/lib/Classess/loading';
import { JobService } from 'src/app/Services/Shared/job.service';
import { TableComponent } from "../../../lib/Views/Components/table/table.component";

@Component({
    selector: 'app-job-requests',
    standalone: true,
    templateUrl: './job-requests.component.html',
    imports: [CommonModule, TableComponent]
})
export class JobRequestsComponent {

  requests:Loading<Apply>;
  constructor(private ApplyService:JobService){
    this.ApplyService.getRequests();

      this.requests=this.ApplyService.requests;
  }

  Accept(Apply:Apply){
    this.ApplyService.accept(Apply);
    this.ApplyService.getRequests();

  }
  reject(Apply:Apply){
    this.ApplyService.reject(Apply);
    this.ApplyService.getRequests();

  }

}
