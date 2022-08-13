import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';
import { CrudComponent } from './components/crud/crud.component';
import { ReactiveFormsModule } from "@angular/forms";
import { PaginationComponent } from './components/pagination/pagination.component';
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ErrorComponent,
    CrudComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [ErrorComponent, CrudComponent, ReactiveFormsModule, PaginationComponent]
})
export class SharedModule { }
