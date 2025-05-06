import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TeacherManagementComponent } from './teacher-management.component';
import { TeacherManagementRoutingModule } from './teacher-management-routing.module';

@NgModule({
  declarations: [TeacherManagementComponent],
  imports: [CommonModule, FormsModule, TeacherManagementRoutingModule],
  exports: [TeacherManagementComponent]
})
export class TeacherManagementModule {}

