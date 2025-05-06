import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'student-management', loadChildren: () => import('../dashboard/student-management/student.module').then(m => m.StudentModule) },
    { path: 'student-enrollment', loadChildren: () => import('../dashboard/student-enrollment/student-enrollment.module').then(m => m.StudentEnrollmentModule) },
    { path: 'student-progress', loadChildren: () => import('../dashboard/student-progress/student-progress.module').then(m => m.StudentProgressModule) },
    { path: 'teacher-management', loadChildren: () => import('../dashboard/teacher-management/teacher-management.module').then(m => m.TeacherManagementModule) }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
