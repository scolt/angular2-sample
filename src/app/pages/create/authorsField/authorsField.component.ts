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
import { IAuthor } from '../../courses/courses.service';

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
  authorsBoxes: any = {};
  result: number[] = [];
  touched: boolean = false;

  writeValue(obj: any) {
    if (!obj) {
      return;
    }
    obj.forEach((author: IAuthor) => {
      this.authorsBoxes[author.id] = true;
    });
    this.onChange();
  }

  registerOnTouched(fn: any) {/* tslint:disable *//* tslint:enable */}

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  onChange() {
    this.touched = true;
    this.result = [];
    Object.keys(this.authorsBoxes).forEach((key: string) => {
      if (this.authorsBoxes[key]) {
        this.result.push(+key);
      }
    });
    this.propagateChange(this.result);
  }

  private propagateChange = (obj: any) => {/* tslint:disable *//* tslint:enable */};
}
