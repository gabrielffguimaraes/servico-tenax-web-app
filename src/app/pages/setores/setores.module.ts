import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetoresRoutingModule } from './setores-routing.module';
import { SetoresListComponent } from './setores-list/setores-list.component';
import { SetorFormComponent } from './setor-form/setor-form.component';
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  declarations: [
    SetoresListComponent,
    SetorFormComponent
  ],
  imports: [
    CommonModule,
    SetoresRoutingModule,
    SharedModule
  ]
})
export class SetoresModule { }
