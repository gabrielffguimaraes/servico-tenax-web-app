import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'servidores' , loadChildren: ()=>import('./pages/servidores/servidores.module').then(C=>C.ServidoresModule)},
  {path:'setores' , loadChildren: ()=>import('./pages/setores/setores.module').then(E=>E.SetoresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
