import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSectionComponent } from "../../../../lib/Views/Components/form-section/form-section.component";
import { Field } from 'src/app/lib/Classess/field';
import { routes } from 'src/app/Configs/app';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    templateUrl: './register.component.html',
    imports: [CommonModule, FormSectionComponent]
})
export class RegisterComponent {

  url=routes.register;
  constructor(private alert:AlertService,private auth:AuthService){

  }
  onSubmit($event: Event) {
   this.alert.alert('Test Form',JSON.stringify($event));
   this.auth.signUp($event);
    }
  getFields = [


    new Field<string>(
      'name',
      {
        controlType: "textbox",

        label: 'Name',
        validators: ["required"],
        customErrorMessages: {
          required: ' This Name is  Required'
        }

      }),


    new Field<string>(
      'email',
      {
        controlType: "textbox",

        label: 'Email',
        type: 'email',

        validators: ["email", "required"],
        value: 'samh@samh.com',
        customErrorMessages: {
          required: ' This Email is Required',
          email: ' Please insert Valid Email'
        }
      }),





    new Field<string>(
      'password',
      {
        controlType: "textbox",

        label: 'Password',
        type:'password',

        customErrorMessages: {
          required: ' This password is Required'
        }

      }),
    new Field<string>(
      'c_password',
      {
        controlType: "textbox",

        label: 'Confirm Password',
        type:'password',

        customErrorMessages: {
          required: ' This c_password is Required'
        }

      }),
  ];
}
