import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServidoresRoutingModule } from './servidores-routing.module';
import { ServidoresListComponent } from './servidores-list/servidores-list.component';
import { ServidorFormComponent } from './servidor-form/servidor-form.component';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  declarations: [
    ServidoresListComponent,
    ServidorFormComponent
  ],
  imports: [
    CommonModule,
    ServidoresRoutingModule,
    SharedModule
  ]
})
export class ServidoresModule { }
