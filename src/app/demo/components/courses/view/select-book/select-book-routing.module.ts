
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectBookComponent } from './select-book.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: SelectBookComponent }
  ])],
  exports: [RouterModule]
})
export class SelectBookRoutingModule { }
