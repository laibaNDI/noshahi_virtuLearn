// import { OnInit } from '@angular/core';
// import { Component } from '@angular/core';
// import { LayoutService } from './service/app.layout.service';

// @Component({
//     selector: 'app-menu',
//     templateUrl: './app.menu.component.html'
// })
// export class AppMenuComponent implements OnInit {

//     model: any[] = [];

//     constructor(public layoutService: LayoutService) { }

//     ngOnInit() {
//         this.model = [
//             {
//                 label: 'Home',
//                 items: [
//                     { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
//                 ]
//             },
//             {
//                 label: 'UI Components',
//                 items: [
//                     { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
//                     { label: 'Input', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
//                     { label: 'Student', icon: 'pi pi-fw pi-user', routerLink: ['/uikit/student'] },
//                     { label: 'Float Label', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
//                     { label: 'Invalid State', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
//                     { label: 'Button', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },
//                     { label: 'Table', icon: 'pi pi-fw pi-table', routerLink: ['/uikit/table'] },
//                     { label: 'List', icon: 'pi pi-fw pi-list', routerLink: ['/uikit/list'] },
//                     { label: 'Tree', icon: 'pi pi-fw pi-share-alt', routerLink: ['/uikit/tree'] },
//                     { label: 'Panel', icon: 'pi pi-fw pi-tablet', routerLink: ['/uikit/panel'] },
//                     { label: 'Overlay', icon: 'pi pi-fw pi-clone', routerLink: ['/uikit/overlay'] },
//                     { label: 'Media', icon: 'pi pi-fw pi-image', routerLink: ['/uikit/media'] },
//                     { label: 'Menu', icon: 'pi pi-fw pi-bars', routerLink: ['/uikit/menu'], routerLinkActiveOptions: { paths: 'subset', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' } },
//                     { label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
//                     { label: 'File', icon: 'pi pi-fw pi-file', routerLink: ['/uikit/file'] },
//                     { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/uikit/charts'] },
//                     { label: 'Misc', icon: 'pi pi-fw pi-circle', routerLink: ['/uikit/misc'] }
//                 ]
//             },
//             {
//                 label: 'Prime Blocks',
//                 items: [
//                     { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', routerLink: ['/blocks'], badge: 'NEW' },
//                     { label: 'All Blocks', icon: 'pi pi-fw pi-globe', url: ['https://www.primefaces.org/primeblocks-ng'], target: '_blank' },
//                 ]
//             },
//             {
//                 label: 'Utilities',
//                 items: [
//                     { label: 'PrimeIcons', icon: 'pi pi-fw pi-prime', routerLink: ['/utilities/icons'] },
//                     { label: 'PrimeFlex', icon: 'pi pi-fw pi-desktop', url: ['https://www.primefaces.org/primeflex/'], target: '_blank' },
//                 ]
//             },
//             {
//                 label: 'Pages',
//                 icon: 'pi pi-fw pi-briefcase',
//                 items: [
//                     {
//                         label: 'Landing',
//                         icon: 'pi pi-fw pi-globe',
//                         routerLink: ['/landing']
//                     },
//                     {
//                         label: 'Auth',
//                         icon: 'pi pi-fw pi-user',
//                         items: [
//                             {
//                                 label: 'Login',
//                                 icon: 'pi pi-fw pi-sign-in',
//                                 routerLink: ['/auth/login']
//                             },
//                             {
//                                 label: 'Error',
//                                 icon: 'pi pi-fw pi-times-circle',
//                                 routerLink: ['/auth/error']
//                             },
//                             {
//                                 label: 'Access Denied',
//                                 icon: 'pi pi-fw pi-lock',
//                                 routerLink: ['/auth/access']
//                             }
//                         ]
//                     },
//                     {
//                         label: 'Crud',
//                         icon: 'pi pi-fw pi-pencil',
//                         routerLink: ['/pages/crud']
//                     },
//                     {
//                         label: 'Timeline',
//                         icon: 'pi pi-fw pi-calendar',
//                         routerLink: ['/pages/timeline']
//                     },
//                     {
//                         label: 'Not Found',
//                         icon: 'pi pi-fw pi-exclamation-circle',
//                         routerLink: ['/notfound']
//                     },
//                     {
//                         label: 'Empty',
//                         icon: 'pi pi-fw pi-circle-off',
//                         routerLink: ['/pages/empty']
//                     },
//                 ]
//             },
//             {
//                 label: 'Hierarchy',
//                 items: [
//                     {
//                         label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
//                         items: [
//                             {
//                                 label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
//                                 items: [
//                                     { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
//                                     { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
//                                     { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
//                                 ]
//                             },
//                             {
//                                 label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
//                                 items: [
//                                     { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
//                                 ]
//                             },
//                         ]
//                     },
//                     {
//                         label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
//                         items: [
//                             {
//                                 label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
//                                 items: [
//                                     { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
//                                     { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
//                                 ]
//                             },
//                             {
//                                 label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
//                                 items: [
//                                     { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
//                                 ]
//                             },
//                         ]
//                     }
//                 ]
//             },
//             {
//                 label: 'Get Started',
//                 items: [
//                     {
//                         label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation']
//                     },
//                     {
//                         label: 'View Source', icon: 'pi pi-fw pi-search', url: ['https://github.com/primefaces/sakai-ng'], target: '_blank'
//                     }
//                 ]
//             }
//         ];
//     }
// }



import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard',
                items: [
                    { label: 'Principal Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/principal-dashboard'] },
                    { label: 'Teacher Dashboard', icon: 'pi pi-fw pi-id-card', routerLink: ['/teacher-dashboard'] }, // Verified icon
                    { label: 'Student Dashboard', icon: 'pi pi-fw pi-user', routerLink: ['/student-dashboard'] }
                ]
            },
            {
                label: 'Student Management',
                items: [
                    { label: 'Student Profiles', icon: 'pi pi-fw pi-users', routerLink: ['/student-management'] },
                    { label: 'Student Enrollment', icon: 'pi pi-fw pi-pencil', routerLink: ['/student-enrollment'] },
                    { label: 'Progress Reports', icon: 'pi pi-fw pi-chart-line', routerLink: ['/student-progress'] }
                ]
            },
            {
                label: 'Teacher Management',
                items: [
                    { label: 'Teacher Profiles', icon: 'pi pi-fw pi-user-edit', routerLink: ['/teacher-management'] },
                    { label: 'Assign Courses', icon: 'pi pi-fw pi-book', routerLink: ['/assign-courses'] },
                    { label: 'Teacher Performance', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/teacher-performance'] }
                ]
            },
            {
                label: 'Courses',
                items: [
                    { label: 'Manage Courses', icon: 'pi pi-fw pi-bookmark', routerLink: ['/courses/manage'] },
                    { label: 'View Courses', icon: 'pi pi-fw pi-folder-open', routerLink: ['/courses/view'] }, // Verified icon
                    { label: 'Course Enrollment', icon: 'pi pi-fw pi-list', routerLink: ['/courses/enroll'] }
                ]
            },
            {
                label: 'Assignments & Quizzes',
                items: [
                    { label: 'Create Assignment', icon: 'pi pi-fw pi-file', routerLink: ['/create-assignment'] },
                    { label: 'View Assignments', icon: 'pi pi-fw pi-eye', routerLink: ['/view-assignments'] },
                    { label: 'Conduct Quiz', icon: 'pi pi-fw pi-question-circle', routerLink: ['/conduct-quiz'] },
                    { label: 'Quiz Results', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/quiz-results'] }
                ]
            },
            {
                label: 'Exams',
                items: [
                    { label: 'Schedule Exam', icon: 'pi pi-fw pi-calendar', routerLink: ['/schedule-exam'] },
                    { label: 'View Exam Results', icon: 'pi pi-fw pi-chart-line', routerLink: ['/exam-results'] }
                ]
            },
            {
                label: 'Reports',
                items: [
                    { label: 'Student Performance', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/student-performance'] },
                    { label: 'Teacher Performance', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/teacher-performance'] }
                ]
            },
            {
                label: 'Communication',
                items: [
                    { label: 'Messages', icon: 'pi pi-fw pi-comments', routerLink: ['/messages'] },
                    { label: 'Notifications', icon: 'pi pi-fw pi-bell', routerLink: ['/notifications'] }
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Platform Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/settings'] },
                    { label: 'User Management', icon: 'pi pi-fw pi-users', routerLink: ['/user-management'] }
                ]
            },
            {
                label: 'Support',
                items: [
                    { label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation'] },
                    { label: 'Contact Support', icon: 'pi pi-fw pi-envelope', routerLink: ['/contact-support'] }
                ]
            }
        ];
    }
}
