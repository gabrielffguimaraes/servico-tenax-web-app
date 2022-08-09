import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetoresListComponent} from "./setores-list/setores-list.component";
import {SetorFormComponent} from "./setor-form/setor-form.component";

const routes: Routes = [
  {path:'' , pathMatch:'full' , component:SetoresListComponent},
  {path:'new' , pathMatch:'full' , component:SetorFormComponent},
  {path:':id/edit' , pathMatch:'full' , component:SetorFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetoresRoutingModule { }
