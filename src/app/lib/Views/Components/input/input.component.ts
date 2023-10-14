
import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ReactiveFormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ValidationErrorsComponent } from '../validation-error/validation-errors.component';
import { Field } from '../../../Classess/field';
import { ControlValueAccessorDirective } from '../../../Directives/control-value-accessor-directive';

type InputType = 'text' | 'number' | 'email' | 'password';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],

  imports: [NgIf, ReactiveFormsModule, ValidationErrorsComponent]


})
export class InputComponent<T> extends ControlValueAccessorDirective<T> {

  @Input({ required: true })
  input!: Field<any>;
  // @Input() key = 'ID';
  // @Input() label = 'Label';
  // @Input() type: InputType = 'text';
  // @Input() customErrorMessages: Record<string, string> = {};



}
