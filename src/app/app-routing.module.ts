import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'categories' , loadChildren: ()=>import('./pages/categories/categories.module').then(C=>C.CategoriesModule)},
  {path:'setores' , loadChildren: ()=>import('./pages/setores/setores.module').then(E=>E.SetoresModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
