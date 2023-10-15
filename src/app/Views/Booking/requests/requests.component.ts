import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from 'src/app/lib/Views/Components/table/table.component';
import { Booking } from 'src/app/Classes/booking';
import { BookingService } from 'src/app/Services/Shared/booking.service';
import { Loading } from 'src/app/lib/Classess/loading';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [CommonModule,TableComponent],
  templateUrl: './requests.component.html',

})
export class RequestsComponent {

  requests:Loading<Booking>;
  constructor(private bookingService:BookingService){
    this.bookingService.getRequests();

      this.requests=this.bookingService.requests;
  }

  Accept(booking:Booking){
    this.bookingService.accept(booking);
    this.bookingService.getRequests();

  }
  reject(booking:Booking){
    this.bookingService.reject(booking);
    this.bookingService.getRequests();

  }
}
