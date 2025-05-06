import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentManagementComponent } from './student-management.component';

const routes: Routes = [
    { path: '', component: StudentManagementComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }
