import {
  Component,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder, FormGroup
} from '@angular/forms';

@Component({
  selector: 'duration-field',
  templateUrl: 'durationField.component.html',
  styleUrls: ['durationField.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationFieldComponent),
      multi: true,
    }
  ]
})
export class DurationFieldComponent implements ControlValueAccessor {
  date: number;

  constructor(private cd: ChangeDetectorRef) {}

  writeValue(obj: any) {
    if (!obj) {
      return;
    }
    this.date = obj;
  }

  registerOnTouched(fn: any) {/* tslint:disable *//* tslint:enable */}

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  onChange(value) {
    this.propagateChange(value);
  }

  private propagateChange = (obj: any) => {/* tslint:disable *//* tslint:enable */};
}
