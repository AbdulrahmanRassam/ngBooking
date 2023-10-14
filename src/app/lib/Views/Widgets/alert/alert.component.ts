import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { AlertLogsComponent } from "../alert-logs/alert-logs.component";
import { AlertService } from '../../../Services/Shared/alert.service';

@Component({
    selector: 'app-alert',
    standalone: true,
    templateUrl: './alert.component.html',
    styles: [],
    imports: [CommonModule, RouterModule, AlertLogsComponent]
})
export class AlertComponent {

   alert =this.alertService.alertS;
  isVisable:boolean=true;
  showAllLogs:boolean=false;
  constructor(private alertService:AlertService){

  }
showLogs(){
  this.showAllLogs=!this.showAllLogs;

}
  dismiss(){
     this.isVisable=!this.isVisable;
  }
}
