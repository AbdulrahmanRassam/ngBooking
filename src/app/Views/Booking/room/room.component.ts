import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from 'src/app/Classes/room';
import { SetBackgroundImageDirective } from 'src/app/lib/Directives/set-background-image.directive';
import { ButtonComponent } from 'src/app/lib/Views/Components/button/button.component';

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

ngOnInit(){
   this.bgImage='url('+this.room.photo_url+')';

 }
 Booking(room: Room | undefined) {
  if (room) {
    // this.cartService.addToCart(room);
  }
}
}
