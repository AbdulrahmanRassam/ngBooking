import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/Services/auth.service';
import { Field } from 'src/app/lib/Classess/field';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';
import { routes } from 'src/app/Configs/app';
import { FormSectionComponent } from "../../../../lib/Views/Components/form-section/form-section.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    imports: [CommonModule, FormSectionComponent]
})
export class LoginComponent {


  url=routes.register;
  constructor(private alert:AlertService,private auth:AuthService){

  }
  onSubmit($event: Event) {
   this.alert.alert('Test Form',JSON.stringify($event));
   this.auth.signIn($event);
    }
  getFields = [




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
        value:'12345678',

        customErrorMessages: {
          required: ' This password is Required'
        }

      }),

  ];
}
