import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertService } from '../../../Services/Shared/alert.service';

@Component({
  selector: 'app-alert-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-logs.component.html',
  styles: [
  ]
})
export class AlertLogsComponent {
  alerts= this.alertService.logs;
  constructor(private alertService:AlertService){

  }
}
