import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from "@angular/forms";
import {Validations} from "../../validations/form-error.validation";

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  @Input() fm!: FormGroup;
  @Input() label!: string;
  @Input() name!: string;
  control!: AbstractControl | null;
  msg = '';

  constructor() {

  }

  ngOnInit(): void {
    this.control = this.fm.get(this.label);
  }
  get errorMessage(): any {
    for (const key in this.control?.errors) {
      if (this.control?.touched) {
        return Validations.getError(this.control, this.label, key);
      }
    }
    return null;
  }
}
