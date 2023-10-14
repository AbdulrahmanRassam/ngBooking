
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { CommonModule, NgFor, KeyValuePipe } from '@angular/common';

@Component({
    selector: 'app-validation-errors',
    // standalone:true,
    templateUrl: './validation-errors.component.html',
    styles: [],
    standalone: true,
    imports: [NgFor, KeyValuePipe]
})
export class ValidationErrorsComponent implements OnChanges {
  @Input() errors: Record<string, ValidationErrors> | null = {};
  @Input() customErrorMessages: Record<string, string> = {};
  errorMessages: Record<string, string> = {
    required: 'This field is required',
  };

  ngOnChanges(changes: SimpleChanges): void {
    const { customErrorMessages } = changes;
    if (customErrorMessages) {
      this.errorMessages = {
        ...this.errorMessages,
        ...customErrorMessages.currentValue,
      };
    }
  }

}
