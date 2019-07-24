import { FormControl, AbstractControl } from "@angular/forms";

export interface IValidationResult {
  [key: string]: boolean;
}

export class Validator {
  public static strong(control: FormControl): IValidationResult {
    const hasNumber = /\d/.test(control.value);
    const hasUpper = /[A-Z]/.test(control.value);
    const hasLower = /[a-z]/.test(control.value);
    const hasSymbol = /[!@#$&*]/.test(control.value);
    const hasMinLength = control.value.length >= 8;
    const valid =
      hasNumber && hasUpper && hasLower && hasSymbol && hasMinLength;
    if (!valid) {
      return { strong: true };
    }
    return null;
  }

  public static checkPassword(control: FormControl): IValidationResult {
    if (control.parent !== undefined) {
      if (control.parent.value.Password !== "" && control.value !== "") {
        const password = control.parent.value.Password;
        const confirmPassword = control.value;
        if (password === confirmPassword) {
          return null;
        } else {
          return { matchPassword: true };
        }
      }
    }
  }

  public static MatchPassword(control: FormControl): IValidationResult {
    if (control.parent !== undefined) {
      if (control.parent.value.NewPassword !== "" && control.value !== "") {
        if (control.parent.value.NewPassword === control.value) {
          return null;
        } else {
          return { matchPassword: true };
        }
      }
    }
  }

  public static RangeValidationBuy(
    control: AbstractControl
  ): IValidationResult {
    if (control.parent !== undefined) {
      if (
        control.parent.value.range !== "" &&
        control.value !== "" &&
        control.parent.value.range != null
      ) {
        if (control.parent.value.range < control.value) {
          return { rangeValidation: true };
        } else {
          return null;
        }
      }
    }
    return null;
  }

  public static RangeValidationSell(
    control: AbstractControl
  ): IValidationResult {
    if (control.parent !== undefined) {
      if (
        control.parent.value.range !== "" &&
        control.value !== "" &&
        control.parent.value.range != null
      ) {
        if (control.parent.value.range < control.parent.value.amount) {
          return { rangeValidation: true };
        } else {
          return null;
        }
      }
    }
    return null;
  }

  public static MinimumValidation(control: AbstractControl): IValidationResult {
    if (control.parent !== undefined) {
      if (
        control.parent.value.Minimum !== "" &&
        control.parent.value.Minimum != null &&
        control.value !== ""
      ) {
        if (
          control.parent.value.Price !== "" &&
          control.parent.value.Price != null &&
          control.parent.value.Amount !== "" &&
          control.parent.value.Amount != null
        ) {
          const checkMinimumValidation =
            control.parent.value.Price * control.parent.value.Amount <
            control.parent.value.Minimum;
          if (checkMinimumValidation) {
            return { minimumValidation: true };
          }
        }
      }
    }
  }

  public static StopLimitValidateBuy(
    control: AbstractControl
  ): IValidationResult {
    if (control.parent !== undefined) {
      if (
        control.parent.value.BuyStop !== "" &&
        control.value !== "" &&
        control.parent.value.BuyStop != null
      ) {
        if (control.value < control.parent.value.BuyStop) {
          return { rangeValidation: true };
        } else {
          return null;
        }
      }
    }
  }

  public static StopLimitValidateSell(
    control: AbstractControl
  ): IValidationResult {
    if (control.parent !== undefined) {
      if (
        control.parent.value.SellStop !== "" &&
        control.value !== "" &&
        control.parent.value.SellStop != null
      ) {
        if (control.value > control.parent.value.SellStop) {
          return { rangeValidation: true };
        } else {
          return null;
        }
      }
    }
  }

  public static checkAmountValid(control: AbstractControl): IValidationResult {
    if (control.parent !== undefined) {
      if (control.value !== "") {
        if (control.value <= 0) {
          return { marketAmt: true };
        } else {
          return null;
        }
      }
    }
  }
}
