
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectChapterComponent } from './select-chapter.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SelectChapterComponent }
  ])],
  exports: [RouterModule]
})
export class SelectChapterRoutingModule { }
