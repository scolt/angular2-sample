import {
  Component,
  ChangeDetectionStrategy,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormBuilder, FormGroup
} from '@angular/forms';

import { validateDate } from '../../../common/validators/date.validator';

@Component({
  selector: 'date-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'dateField.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateFieldComponent),
      multi: true,
    }
  ]
})
export class DateFieldComponent implements ControlValueAccessor {
  dateForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.dateForm = fb.group({
      date: [null, validateDate]
    });
  }

  writeValue(obj: any) {
    if (!obj) {
      return;
    }
    const date = new Date(obj);
    const month = date.getMonth() + 1;
    this.dateForm.controls['date'].setValue(`${date.getDate()}/${month > 10 ? month : '0' + month}/${date.getFullYear()}`);
  }

  registerOnTouched(fn: any) {/* tslint:disable *//* tslint:enable */}

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  onChange() {
    if (!this.dateForm.valid) {
      this.propagateChange(null);
    } else {
      const dateToArray = this.dateForm.value.date.split('/');
      const date = new Date('01/01/1970');
      date.setDate(dateToArray[0]);
      date.setMonth(--dateToArray[1]);
      date.setFullYear(dateToArray[2]);
      this.propagateChange(date.getTime() / 1000);
    }
  }

  private propagateChange = (obj: any) => {/* tslint:disable *//* tslint:enable */};
}
