import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { CrudComponent } from './components/crud/crud.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    ErrorComponent,
    CrudComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ErrorComponent,CrudComponent,ReactiveFormsModule]
})
export class SharedModule { }
