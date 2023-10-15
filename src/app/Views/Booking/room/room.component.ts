import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from 'src/app/Classes/room';
import { SetBackgroundImageDirective } from 'src/app/lib/Directives/set-background-image.directive';
import { ButtonComponent } from 'src/app/lib/Views/Components/button/button.component';
import { BookingService } from 'src/app/Services/Shared/booking.service';

@Component({
  selector: 'app-room',
  standalone: true,

  templateUrl: './room.component.html',
  imports: [CommonModule, ButtonComponent,SetBackgroundImageDirective]

})
export class RoomComponent {

  @Input({ required: true })
  room!: Room;
  bgImage:string='';

  constructor(private bookingService:BookingService){}
ngOnInit(){
   this.bgImage='url('+this.room.photo_url+')';

 }
 Booking(room: Room | undefined) {
  if (room) {
    this.bookingService.Add(room.id);
  }
}
}
