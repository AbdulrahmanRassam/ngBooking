import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from "../../Booking/room/room.component";
import { Room } from 'src/app/Classes/room';
import { Loading } from 'src/app/lib/Classess/loading';
import { BackEndService } from 'src/app/Services/Shared/back-end.service';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    imports: [CommonModule, RoomComponent]
})
export class HomeComponent {
  data=new Loading<Room>();

  constructor(private backEndService:BackEndService<Room>){

    this.data.load(this.backEndService.fetch('/rooms'));

  }
}
