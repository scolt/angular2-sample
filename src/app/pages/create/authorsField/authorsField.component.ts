import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef
} from '@angular/core';

import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
  selector: 'authors-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: 'authorsField.component.html',
  styleUrls: ['authorsField.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsFieldComponent),
      multi: true,
    }
  ]
})
export class AuthorsFieldComponent implements ControlValueAccessor {
  @Input() authors: any;
  result: number[] = [];
  touched: boolean = false;

  writeValue(obj: any) {/* tslint:disable *//* tslint:enable */}

  registerOnTouched(fn: any) {/* tslint:disable *//* tslint:enable */}

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  onChange(id, status) {
    this.touched = true;
    if (status) {
      this.result.push(id);
    } else {
      const indexToDelete = this.result.findIndex((itemId: number) => itemId === id);
      this.result.splice(indexToDelete, 1);
    }
    this.propagateChange(this.result);
  }

  private propagateChange = (obj: any) => {/* tslint:disable *//* tslint:enable */};
}
