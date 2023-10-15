import { Injectable } from '@angular/core';
import { BackEndService } from './back-end.service';
import { Booking } from 'src/app/Classes/booking';
import { AuthService } from '../auth.service';
import { formatDate } from '@angular/common';
import { Loading } from 'src/app/lib/Classess/loading';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  data:Booking=new Booking;
  requests=new Loading<Booking>;
  constructor(private alert:AlertService,private auth:AuthService ,private backendService:BackEndService<Booking>) { }

  Add(id:number){
    if(this.auth.isAuthenticated()){
    this.data.user_id=this.auth.user().id;
    this.data.room_id=id;
    this.data.check_in_at=formatDate(new Date(), 'yyyy/MM/dd', 'en');;
    this.backendService.post('/add-booking',this.data).subscribe(
      res=>{
        this.alert.alert('Booked','Room Booked Successfully')
        return res;
      }
    )
    }else{
      this.alert.alert('Booking','You should Login Befor Booking')

    }
  }
  accept(booking:Booking){

    this.backendService.post('/accept-request/'+booking.id,{}).subscribe(
      res=>{
        this.alert.alert('Accepted',booking.user+'\' Booking Accepted Successfully')

        return res;
      }
    )
  }
  reject(booking:Booking){

    this.backendService.post('/reject-request/'+booking.id,{}).subscribe(
      res=>{
        this.alert.alert('Accepted',booking.user+'\' Booking Rejected Successfully')

        return res;
      }
    )
  }

  getRequests(){
   this.requests.load(this.backendService.fetch('/bookings'));
  }
}
