import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServidoresListComponent } from "./servidores-list/servidores-list.component";
import { ServidorFormComponent } from "./servidor-form/servidor-form.component";

const routes: Routes = [
  {path:''  , component:ServidoresListComponent},
  {path:'new'  , component:ServidorFormComponent},
  {path:':id/edit'  , component:ServidorFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServidoresRoutingModule { }
