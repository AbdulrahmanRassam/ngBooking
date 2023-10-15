import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from 'src/app/Configs/app';
import { Field } from 'src/app/lib/Classess/field';
import { AlertService } from 'src/app/lib/Services/Shared/alert.service';
import { JobService } from 'src/app/Services/Shared/job.service';
import { FormSectionComponent } from "../../../lib/Views/Components/form-section/form-section.component";

@Component({
    selector: 'app-add-job',
    standalone: true,
    templateUrl: './add-job.component.html',
    imports: [CommonModule, FormSectionComponent]
})
export class  AddJobComponent {

  url=routes.register;
  constructor(private alert:AlertService,private JobService:JobService){

    JobService.getCategories();
  }
  onSubmit($event: Event) {
   this.alert.alert('Test Form',JSON.stringify($event));
   this.JobService.Add($event);
    }
  getFields = [


    new Field<number>(
      'title',
      {
        controlType: "textbox",

        type:"text",
        label: 'Title',
        validators: ["required"],
        customErrorMessages: {
          required: ' This Name is  Required'
        }

      }),


    new Field<number>(
      'content',
      {
        controlType: "number",

        label: 'Content',
        type: 'text',

        validators: [ "required"],

        customErrorMessages: {
          required: '  Content is Required to Show More Details About Job',

        }
      }),





    new Field<string>(
      'city',
      {
        controlType: "textbox",

        label: 'City',
        type:'text',
        customErrorMessages: {
          required: ' This city is Required'
        }

      }),
    new Field<string>(
      'salary',
      {
        controlType: "number",

        label: 'Salary',
        type:'number',
        customErrorMessages: {
          required: ' This Salary is Required'
        }

      }),
    new Field<string>(
      'category',
      {
        controlType: "select",

        label: 'Salary',
        type:'text',
        values:this.JobService.categories,
        customErrorMessages: {
          required: ' This category is Required'
        }

      }),
    new Field<string>(
      'expire_on',
      {
        controlType: "date",

        label: 'Expire on',
        type:'date',
        customErrorMessages: {
          required: ' This Expire on is Required'
        }

      }),

  ];

}
