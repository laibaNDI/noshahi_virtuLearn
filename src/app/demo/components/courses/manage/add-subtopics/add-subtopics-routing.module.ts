
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddSubtopicsComponent } from './add-subtopics.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AddSubtopicsComponent }
  ])],
  exports: [RouterModule]
})
export class AddSubtopicsRoutingModule { }
