// #docregion
import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

// #docregion custom-validator
/** A hero's name can't match the given regular expression */
export function multipleEmailValidator(emailRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const contains = control.value === '' ? true : emailRe.test(control.value);
    return contains ? null : {'wrongEmail': {value: control.value}};
  };
}

// #docregion directive
@Directive({
  selector: '[appWrongEmail]',
  // #docregion directive-providers
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  // #enddocregion directive-providers
})
export class ForbiddenValidatorDirective implements Validator {
  @Input() wrongEmail: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.wrongEmail ? multipleEmailValidator(new RegExp(this.wrongEmail, 'i'))(control)
                              : null;
  }
}
