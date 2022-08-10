import {AbstractControl, FormControl, FormGroup} from '@angular/forms';

export class Validations {
  static hasLetterS(): any {
    const validator = (control: FormControl) => {
      if (control.value.indexOf('s') === -1) {
        return {
          hasLetterS: true
        };
      }
      return null;
    };
    return validator;
  }
  static getError(control: AbstractControl, label: string, key: string): any {
    if (key !== '') {
      return {
        required: ` * Campo obrigatório`,
        email: `E-mail inválido`,
        minlength: `* Minimo de ${control?.getError('minlength')?.requiredLength} caracteres .`,
        hasLetterS: `* ${label} deve conter a letra S`
      }[key];
    } else {
      return '';
    }
  }
  validField(field: string,fm:FormGroup) : boolean {
    return <boolean>(!fm.get(field)?.valid && fm.get(field)?.touched);
  }
}
