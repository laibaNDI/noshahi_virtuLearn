
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Quiz1Component } from './quiz1.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: Quiz1Component }
  ])],
  exports: [RouterModule]
})
export class Quiz1RoutingModule { }
