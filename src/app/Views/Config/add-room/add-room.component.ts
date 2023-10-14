import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Field } from 'src/app/lib/Classess/field';
import { FormSectionComponent } from "../../../lib/Views/Components/form-section/form-section.component";
import { routes } from 'src/app/Configs/app';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';
import { RoomService } from 'src/app/Services/Shared/room.service';

@Component({
    selector: 'app-add-room',
    standalone: true,
    templateUrl: './add-room.component.html',
    imports: [CommonModule, FormSectionComponent]
})
export class AddRoomComponent {

  url=routes.register;
  constructor(private alert:AlertService,private roomService:RoomService){

  }
  onSubmit($event: Event) {
   this.alert.alert('Test Form',JSON.stringify($event));
   this.roomService.Add($event);
    }
  getFields = [


    new Field<number>(
      'room_no',
      {
        controlType: "textbox",

        type:"number",
        label: 'Room No',
        validators: ["required"],
        customErrorMessages: {
          required: ' This Name is  Required'
        }

      }),


    new Field<number>(
      'price',
      {
        controlType: "number",

        label: 'Price',
        type: 'number',

        validators: [ "required"],
        value: 230,
        customErrorMessages: {
          required: ' This Email is Required',
          email: ' Please insert Valid Email'
        }
      }),





    new Field<string>(
      'type',
      {
        controlType: "select",

        label: 'Type',
        type:'text',
        values:['Employee','Admin','User'],

        customErrorMessages: {
          required: ' This password is Required'
        }

      }),

  ];
}
