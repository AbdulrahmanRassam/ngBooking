import { Component, ElementRef, Inject, Injector, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule,NgIf } from '@angular/common';
import { ValidationErrorsComponent } from "../validation-error/validation-errors.component";
import { ReactiveFormsModule, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { ControlValueAccessorDirective } from '../../../Directives/control-value-accessor-directive';
import { Field } from '../../../Classess/field';

@Component({
    selector: 'app-upload-image',
    standalone: true,
    templateUrl: './upload-image.component.html',
    styles: [],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => UploadImageComponent),
        multi: true,
      },
    ],

    imports: [NgIf, ReactiveFormsModule, ValidationErrorsComponent]

})
export class UploadImageComponent<T> extends ControlValueAccessorDirective<T>  {


  @Input({ required: true })
  input!: Field<any>;

  // @Input({required:true}) form!: FormGroup ;
  previewImage:string='';
  imageInfos: any;

  // constructor(@Inject(Injector)   injector: Injector,private uploadService: BackEndService<any>) {
  //   super(injector);
  //   this.previewImage=this.input.value??'assets/logo.jpeg';
  // }

  selectedFiles?: FileList;
  currentFile!: File;
  progress = 0;
  message = ' init';


  imgFileSelected(event: any): void {
    this.message = '';

    this.progress = 0;
    this.currentFile = event.target.files[0];
    this.selectedFiles = event.target.files;


    if (this.selectedFiles) {
      const file= this.selectedFiles.item(0);


      if (file) {
        this.currentFile =file;
        const reader = new FileReader();
        reader.onload = (e: any) => {
          console.log(e.target.result);

          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(this.currentFile);

         this.control?.patchValue(this.currentFile);
        this.message = JSON.stringify(this.currentFile);
      }

    }
  }

  upload(): void {
    this.progress = 0;
    this.message = JSON.stringify('Uploaded ...'+this.currentFile.name);

  }
}
