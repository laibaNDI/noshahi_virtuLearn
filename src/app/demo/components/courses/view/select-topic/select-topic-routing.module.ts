
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectTopicComponent } from './select-topic.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SelectTopicComponent }
  ])],
  exports: [RouterModule]
})
export class SelectTopicRoutingModule { }
