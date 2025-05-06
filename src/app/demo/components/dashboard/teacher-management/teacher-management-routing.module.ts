import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherManagementComponent } from './teacher-management.component';

const routes: Routes = [
  { path: '', component: TeacherManagementComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherManagementRoutingModule {}
