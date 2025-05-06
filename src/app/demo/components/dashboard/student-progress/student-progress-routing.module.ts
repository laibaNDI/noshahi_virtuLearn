import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentProgressComponent } from './student-progress.component';

const routes: Routes = [
  { path: '', component: StudentProgressComponent } // Default route for Student Progress
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentProgressRoutingModule {}
