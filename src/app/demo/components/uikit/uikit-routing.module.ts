// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @NgModule({
//     imports: [RouterModule.forChild([
        
//         { path: 'button', data: { breadcrumb: 'button' }, loadChildren: () => import('./button/buttondemo.module').then(m => m.ButtonDemoModule) },
//         { path: 'charts', data: { breadcrumb: 'Charts' }, loadChildren: () => import('./charts/chartsdemo.module').then(m => m.ChartsDemoModule) },
//         { path: 'file', data: { breadcrumb: 'File' }, loadChildren: () => import('./file/filedemo.module').then(m => m.FileDemoModule) },
//         { path: 'floatlabel', data: { breadcrumb: 'Float Label' }, loadChildren: () => import('./floatlabel/floatlabeldemo.module').then(m => m.FloatlabelDemoModule) },
//         { path: 'formlayout', data: { breadcrumb: 'Form Layout' }, loadChildren: () => import('./formlayout/formlayoutdemo.module').then(m => m.FormLayoutDemoModule) },
//         { path: 'input', data: { breadcrumb: 'Input' }, loadChildren: () => import('./input/inputdemo.module').then(m => m.InputDemoModule) },
//         { path: 'student', data: { breadcrumb: 'Student' }, loadChildren: () => import('./student/student.module').then(m => m.StudentModule) },
//         { path: 'invalidstate', data: { breadcrumb: 'Invalid State' }, loadChildren: () => import('./invalid/invalidstatedemo.module').then(m => m.InvalidStateDemoModule) },
//         { path: 'list', data: { breadcrumb: 'List' }, loadChildren: () => import('./list/listdemo.module').then(m => m.ListDemoModule) },
//         { path: 'media', data: { breadcrumb: 'Media' }, loadChildren: () => import('./media/mediademo.module').then(m => m.MediaDemoModule) },
//         { path: 'message', data: { breadcrumb: 'Message' }, loadChildren: () => import('./messages/messagesdemo.module').then(m => m.MessagesDemoModule) },
//         { path: 'misc', data: { breadcrumb: 'Misc' }, loadChildren: () => import('./misc/miscdemo.module').then(m => m.MiscDemoModule) },
//         { path: 'overlay', data: { breadcrumb: 'Overlay' }, loadChildren: () => import('./overlays/overlaysdemo.module').then(m => m.OverlaysDemoModule) },
//         { path: 'panel', data: { breadcrumb: 'Panel' }, loadChildren: () => import('./panels/panelsdemo.module').then(m => m.PanelsDemoModule) },
//         { path: 'table', data: { breadcrumb: 'Table' }, loadChildren: () => import('./table/tabledemo.module').then(m => m.TableDemoModule) },
//         { path: 'tree', data: { breadcrumb: 'Tree' }, loadChildren: () => import('./tree/treedemo.module').then(m => m.TreeDemoModule) },
//         { path: 'menu', data: { breadcrumb: 'Menu' }, loadChildren: () => import('./menus/menus.module').then(m => m.MenusModule) },
//         { path: '**', redirectTo: '/notfound' }
//     ])],
//     exports: [RouterModule]
// })
// export class UIkitRoutingModule { }



import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
// {         path: 'principal-dashboard', data: { breadcrumb: 'Principal Dashboard' }, loadChildren: () => import('./principal-dashboard/principal-dashboard.module').then(m => m.PrincipalDashboardModule) },
//         { path: 'teacher-dashboard', data: { breadcrumb: 'Teacher Dashboard' }, loadChildren: () => import('./teacher-dashboard/teacher-dashboard.module').then(m => m.TeacherDashboardModule) },
//         { path: 'student-dashboard', data: { breadcrumb: 'Student Dashboard' }, loadChildren: () => import('./student-dashboard/student-dashboard.module').then(m => m.StudentDashboardModule) },
        // { path: 'student-management', data: { breadcrumb: 'Student Management' }, loadChildren: () => import('./student-management/student-management.module').then(m => m.StudentManagementModule) },
        // { path: 'student-enrollment', data: { breadcrumb: 'Student Enrollment' }, loadChildren: () => import('./student-enrollment/student-enrollment.module').then(m => m.StudentEnrollmentModule) },
        // { path: 'teacher-management', data: { breadcrumb: 'Teacher Management' }, loadChildren: () => import('./teacher-management/teacher-management.module').then(m => m.TeacherManagementModule) },
        // { path: 'assign-courses', data: { breadcrumb: 'Assign Courses' }, loadChildren: () => import('./assign-courses/assign-courses.module').then(m => m.AssignCoursesModule) },
        // { path: 'manage-courses', data: { breadcrumb: 'Manage Courses' }, loadChildren: () => import('./manage-courses/manage-courses.module').then(m => m.ManageCoursesModule) },
        // { path: 'course-enrollment', data: { breadcrumb: 'Course Enrollment' }, loadChildren: () => import('./course-enrollment/course-enrollment.module').then(m => m.CourseEnrollmentModule) },
        // { path: 'create-assignment', data: { breadcrumb: 'Create Assignment' }, loadChildren: () => import('./create-assignment/create-assignment.module').then(m => m.CreateAssignmentModule) },
        // { path: 'view-assignments', data: { breadcrumb: 'View Assignments' }, loadChildren: () => import('./view-assignments/view-assignments.module').then(m => m.ViewAssignmentsModule) },
        // { path: 'schedule-exam', data: { breadcrumb: 'Schedule Exam' }, loadChildren: () => import('./schedule-exam/schedule-exam.module').then(m => m.ScheduleExamModule) },
        // { path: 'exam-results', data: { breadcrumb: 'Exam Results' }, loadChildren: () => import('./exam-results/exam-results.module').then(m => m.ExamResultsModule) },
        // { path: 'student-performance', data: { breadcrumb: 'Student Performance' }, loadChildren: () => import('./student-performance/student-performance.module').then(m => m.StudentPerformanceModule) },
        // { path: 'teacher-performance', data: { breadcrumb: 'Teacher Performance' }, loadChildren: () => import('./teacher-performance/teacher-performance.module').then(m => m.TeacherPerformanceModule) },
        // { path: 'notifications', data: { breadcrumb: 'Notifications' }, loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule) },
        // { path: 'settings', data: { breadcrumb: 'Settings' }, loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
        // { path: 'user-management', data: { breadcrumb: 'User Management' }, loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },
        // { path: 'documentation', data: { breadcrumb: 'Documentation' }, loadChildren: () => import('./documentation/documentation.module').then(m => m.DocumentationModule) },
        // { path: 'contact-support', data: { breadcrumb: 'Contact Support' }, loadChildren: () => import('./contact-support/contact-support.module').then(m => m.ContactSupportModule) },
        { path: '**', redirectTo: '/notfound' } // Default fallback for unmatched routes
    ])],
    exports: [RouterModule]
})
export class UIkitRoutingModule { }
