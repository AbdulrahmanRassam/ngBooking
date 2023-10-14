import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from "../section/section.component";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { FormGroup, FormControl, ValidatorFn, Validators, ReactiveFormsModule } from '@angular/forms';

import { UploadImageComponent } from "../upload-image/upload-image.component";
import { Observable } from 'rxjs';
import { Field } from '../../../Classess/field';
import { AlertService } from '../../../Services/Shared/alert.service';
import { SelectComponent } from "../select/select.component";

@Component({
    selector: 'app-form-section',
    standalone: true,
    templateUrl: './form-section.component.html',
    styles: [],
    imports: [CommonModule, SectionComponent, ButtonComponent, InputComponent, ReactiveFormsModule, UploadImageComponent, SelectComponent]
})
export class FormSectionComponent<T> {

  @Output() onSubmited = new EventEmitter<any>();

    @Input() formFields: Field<String|number|File|string[]>[] = [];
    @Input() url:string='';
   formGroup = new FormGroup({});
  payLoad = '';
  action$: Observable<T> | undefined;


  constructor(private alert:AlertService){}
  ngOnInit(): void {
    this.formFields.forEach(element => {
       this.formGroup.addControl(element.key, new FormControl(element.value||'',this.getValidator(element.validators)));
    });
  }

  private getValidator(Inputvalidators: string[]): ValidatorFn[] {
    let validators: ValidatorFn[] = [];

    Inputvalidators.forEach(validator=>{

      switch(validator) {
        case 'required':
          validators.push(Validators.required);
              break;
        case 'email':
          validators.push(Validators.email);
              break;

        default:
      }
    })
    return validators;
  }

  onSubmit() {
      this.onSubmited.emit(this.formGroup.value);
  }

}
