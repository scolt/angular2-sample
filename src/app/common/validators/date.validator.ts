import { FormControl } from '@angular/forms';

export function validateDate(c: FormControl) {
  /* dd/MM/yyyy */
  const DATE_REGEXP = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!DATE_REGEXP.test(c.value)) {
    return { validateDate: true };
  }

  let valueToArray = c.value.split('/');

  if (+valueToArray[0] > 31 || +valueToArray[0] < 1) {
    return { validateDate: true };
  }

  if (+valueToArray[1] > 12 || +valueToArray[1] < 1) {
    return { validateDate: true };
  }

  if (+valueToArray[2] < 2010) {
    return { validateDate: true };
  }

  return null;
}
