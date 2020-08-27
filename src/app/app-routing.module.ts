import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Comp2Component } from 'src/app/comp2/comp2.component'

const routes: Routes = [
  { path: 'Comp2', component: Comp2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
