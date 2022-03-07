import { AbstractControl, ValidatorFn } from '@angular/forms';

export class LoginValidator {

  static passwordValidation(firstNameControl: AbstractControl | null, lastNameControl: AbstractControl | null): ValidatorFn {

    return (inputControl: AbstractControl): { [key: string]: boolean } | null => {
      if (firstNameControl?.value && lastNameControl?.value) {
        if (inputControl.value !== undefined
          && inputControl.value.trim() != ""
          && ( inputControl.value.toLowerCase().indexOf(firstNameControl?.value.toLowerCase()) !== -1
            || inputControl.value.toLowerCase().indexOf(lastNameControl?.value.toLowerCase()) !== -1)) {
          return { 'passwordNotValid': true };
        }
      }
      return null;
    };
  }
}
