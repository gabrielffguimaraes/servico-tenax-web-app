import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";

const routes: Routes = [
  {path:'' , component: HomeComponent},
  {path:'servidores' , loadChildren: ()=>import('./pages/servidores/servidores.module').then(C=>C.ServidoresModule)},
  {path:'setores' , loadChildren: ()=>import('./pages/setores/setores.module').then(E=>E.SetoresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
