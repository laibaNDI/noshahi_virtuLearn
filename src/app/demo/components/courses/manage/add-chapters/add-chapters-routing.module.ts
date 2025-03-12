
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddChaptersComponent } from './add-chapters.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: AddChaptersComponent }
  ])],
  exports: [RouterModule]
})
export class AddChaptersRoutingModule { }
