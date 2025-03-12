
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddTopicsComponent } from './add-topics.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AddTopicsComponent }
  ])],
  exports: [RouterModule]
})
export class AddTopicsRoutingModule { }
