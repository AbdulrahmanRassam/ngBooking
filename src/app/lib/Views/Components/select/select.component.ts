import { CommonModule, NgIf, NgFor } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorDirective } from 'src/app/lib/Directives/control-value-accessor-directive';
import { ValidationErrorsComponent } from '../validation-error/validation-errors.component';

@Component({
    selector: 'app-select',
    standalone:true,
    templateUrl: './select.component.html',
    styles: [],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true,
        },
    ],
    imports: [
        NgIf,
        ReactiveFormsModule,
        NgFor,
        ValidationErrorsComponent,

    ],
})
export class SelectComponent<T> extends ControlValueAccessorDirective<T> {
  @Input() options: T[] = [];
  @Input() selectId = '';
  @Input() label = 'Select';
  @Input() customErrorMessages: Record<string, string> = {};

}
