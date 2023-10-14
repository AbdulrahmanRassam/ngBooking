import { Injectable } from '@angular/core';
import { BackEndService } from './back-end.service';
import { Room } from 'src/app/Classes/room';
import { appConfig } from 'src/app/Configs/app';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private backendService:BackEndService<Room>) { }

  Add(data:any){
    this.backendService.post('/add-room',data).subscribe(
      res=>{
        return res;
      }
    )
  }
}
