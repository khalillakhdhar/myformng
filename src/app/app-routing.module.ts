import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { Ex1Component } from './ex1/ex1.component';

const routes: Routes = [
  {path:'',redirectTo:'/first',pathMatch:'full'},
  {path:'first',component:FirstComponent},
  {path:'ex1',component:Ex1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
