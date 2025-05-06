// import { OnInit } from '@angular/core';
// import { Component } from '@angular/core';
// import { LayoutService } from './service/app.layout.service';
// import { AuthService } from './service/auth.service';

// @Component({
//     selector: 'app-menu',
//     templateUrl: './app.menu.component.html'
// })
// export class AppMenuComponent implements OnInit {

//     model: any[] = [];

//     constructor(
//         public layoutService: LayoutService,
//         private authService: AuthService
//     ) {}

//     ngOnInit() {
//         const userRole = this.authService.getUserRole(); // 'Principal', 'Teacher', 'Student', etc.

//         const fullMenu = [
//             {
//                 label: 'Dashboard',
//                 items: [
//                     { label: 'Principal Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/principal-dashboard'], roles: ['Principal'] },
//                     { label: 'Teacher Dashboard', icon: 'pi pi-fw pi-id-card', routerLink: ['/teacher-dashboard'], roles: ['Teacher'] },
//                     { label: 'Student Dashboard', icon: 'pi pi-fw pi-user', routerLink: ['/student-dashboard'], roles: ['Student'] }
//                 ]
//             },
//             {
//                 label: 'Student Management',
//                 items: [
//                     { label: 'Student Profiles', icon: 'pi pi-fw pi-users', routerLink: ['/student-management'], roles: ['Admin', 'Principal'] },
//                     { label: 'Student Enrollment', icon: 'pi pi-fw pi-pencil', routerLink: ['/student-enrollment'], roles: ['Principal'] },
//                     { label: 'Progress Reports', icon: 'pi pi-fw pi-chart-line', routerLink: ['/student-progress'], roles: ['Principal', 'Teacher'] }
//                 ]
//             },
//             {
//                 label: 'Teacher Management',
//                 items: [
//                     { label: 'Teacher Profiles', icon: 'pi pi-fw pi-user-edit', routerLink: ['/teacher-management'], roles: ['Admin', 'Principal'] },
//                     { label: 'Assign Courses', icon: 'pi pi-fw pi-book', routerLink: ['/assign-courses'], roles: ['Principal'] },
//                     { label: 'Teacher Performance', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/teacher-performance'], roles: ['Principal'] }
//                 ]
//             },
//             {
//                 label: 'Courses',
//                 items: [
//                     { label: 'Manage Courses', icon: 'pi pi-fw pi-bookmark', routerLink: ['/courses/manage'], roles: ['Principal', 'Teacher'] },
//                     { label: 'View Courses', icon: 'pi pi-fw pi-folder-open', routerLink: ['/courses/view'], roles: ['Principal', 'Teacher', 'Student'] },
//                     { label: 'Course Enrollment', icon: 'pi pi-fw pi-list', routerLink: ['/courses/enroll'], roles: ['Principal', 'Student'] }
//                 ]
//             },
//             {
//                 label: 'Assignments & Quizzes',
//                 items: [
//                     { label: 'Create Assignment', icon: 'pi pi-fw pi-file', routerLink: ['/create-assignment'], roles: ['Teacher'] },
//                     { label: 'View Assignments', icon: 'pi pi-fw pi-eye', routerLink: ['/view-assignments'], roles: ['Teacher', 'Student'] },
//                     { label: 'Conduct Quiz', icon: 'pi pi-fw pi-question-circle', routerLink: ['/conduct-quiz'], roles: ['Teacher'] },
//                     { label: 'Quiz Results', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/quiz-results'], roles: ['Teacher', 'Student'] }
//                 ]
//             },
//             {
//                 label: 'Exams',
//                 items: [
//                     { label: 'Schedule Exam', icon: 'pi pi-fw pi-calendar', routerLink: ['/schedule-exam'], roles: ['Principal', 'Teacher'] },
//                     { label: 'View Exam Results', icon: 'pi pi-fw pi-chart-line', routerLink: ['/exam-results'], roles: ['Principal', 'Teacher', 'Student'] }
//                 ]
//             },
//             {
//                 label: 'Reports',
//                 items: [
//                     { label: 'Student Performance', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/student-performance'], roles: ['Principal'] },
//                     { label: 'Teacher Performance', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/teacher-performance'], roles: ['Principal'] }
//                 ]
//             },
//             {
//                 label: 'Communication',
//                 items: [
//                     { label: 'Messages', icon: 'pi pi-fw pi-comments', routerLink: ['/messages'], roles: ['Principal', 'Teacher', 'Student'] },
//                     { label: 'Notifications', icon: 'pi pi-fw pi-bell', routerLink: ['/notifications'], roles: ['Principal', 'Teacher', 'Student'] }
//                 ]
//             },
//             {
//                 label: 'Settings',
//                 items: [
//                     { label: 'Platform Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/settings'], roles: ['Admin'] },
//                     { label: 'User Management', icon: 'pi pi-fw pi-users', routerLink: ['/user-management'], roles: ['Admin'] }
//                 ]
//             },
//             {
//                 label: 'Support',
//                 items: [
//                     { label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation'], roles: ['Admin', 'Principal', 'Teacher', 'Student'] },
//                     { label: 'Contact Support', icon: 'pi pi-fw pi-envelope', routerLink: ['/contact-support'], roles: ['Admin', 'Principal', 'Teacher', 'Student'] }
//                 ]
//             }
//         ];

//         this.model = this.filterMenuByRole(fullMenu, userRole);
//     }

//     filterMenuByRole(menu: any[], role: string): any[] {
//         return menu
//             .map(section => {
//                 const filteredItems = section.items.filter(item => item.roles?.includes(role));
//                 return filteredItems.length > 0 ? { ...section, items: filteredItems } : null;
//             })
//             .filter(section => section !== null);
//     }
// }



import { Component, OnInit } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService
    ) {}

    ngOnInit() {
        const role = this.authService.getUserRole(); // e.g. 'Principal', 'Teacher', 'Student'

        const allMenus = this.getMenuItems();

        this.model = this.filterByRole(allMenus, role);
    }

    private getMenuItems(): any[] {
        return [
            {
                label: 'Dashboard',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'], roles: ['Admin', 'Principal', 'Teacher', 'Student'] }
                ]
            },
            {
                label: 'Student Management',
                items: [
                    { label: 'Profiles', icon: 'pi pi-fw pi-users', routerLink: ['/student-management'], roles: ['Admin', 'Principal'] },
                    { label: 'Enrollment', icon: 'pi pi-fw pi-pencil', routerLink: ['/student-enrollment'], roles: ['Principal'] },
                    { label: 'Progress', icon: 'pi pi-fw pi-chart-line', routerLink: ['/student-progress'], roles: ['Principal', 'Teacher'] }
                ]
            },
            {
                label: 'Teacher Management',
                items: [
                    { label: 'Profiles', icon: 'pi pi-fw pi-user-edit', routerLink: ['/teacher-management'], roles: ['Admin', 'Principal'] },
                    { label: 'Assign Courses', icon: 'pi pi-fw pi-book', routerLink: ['/assign-courses'], roles: ['Principal'] },
                    { label: 'Performance', icon: 'pi pi-fw pi-chart-pie', routerLink: ['/teacher-performance'], roles: ['Principal'] }
                ]
            },
            {
                label: 'Courses',
                items: [
                    { label: 'Manage', icon: 'pi pi-fw pi-bookmark', routerLink: ['/courses/manage'], roles: ['Principal', 'Teacher'] },
                    { label: 'View', icon: 'pi pi-fw pi-folder-open', routerLink: ['/courses/view'], roles: ['Principal', 'Teacher', 'Student'] },
                    { label: 'Enrollment', icon: 'pi pi-fw pi-list', routerLink: ['/courses/enroll'], roles: ['Principal', 'Student'] }
                ]
            },
            {
                label: 'Assignments & Quizzes',
                items: [
                    { label: 'Create Assignment', icon: 'pi pi-fw pi-file', routerLink: ['/create-assignment'], roles: ['Teacher'] },
                    { label: 'View Assignments', icon: 'pi pi-fw pi-eye', routerLink: ['/view-assignments'], roles: ['Teacher', 'Student'] },
                    { label: 'Conduct Quiz', icon: 'pi pi-fw pi-question-circle', routerLink: ['/conduct-quiz'], roles: ['Teacher'] },
                    { label: 'Quiz Results', icon: 'pi pi-fw pi-chart-bar', routerLink: ['/quiz-results'], roles: ['Teacher', 'Student'] }
                ]
            },
            {
                label: 'Exams',
                items: [
                    { label: 'Schedule Exam', icon: 'pi pi-fw pi-calendar', routerLink: ['/schedule-exam'], roles: ['Principal', 'Teacher'] },
                    { label: 'Exam Results', icon: 'pi pi-fw pi-chart-line', routerLink: ['/exam-results'], roles: ['Principal', 'Teacher', 'Student'] }
                ]
            },
            {
                label: 'Communication',
                items: [
                    { label: 'Messages', icon: 'pi pi-fw pi-comments', routerLink: ['/messages'], roles: ['Principal', 'Teacher', 'Student'] },
                    { label: 'Notifications', icon: 'pi pi-fw pi-bell', routerLink: ['/notifications'], roles: ['Principal', 'Teacher', 'Student'] }
                ]
            },
            {
                label: 'Settings',
                items: [
                    { label: 'Platform Settings', icon: 'pi pi-fw pi-cog', routerLink: ['/settings'], roles: ['Admin'] },
                    { label: 'User Management', icon: 'pi pi-fw pi-users', routerLink: ['/user-management'], roles: ['Admin'] }
                ]
            },
            {
                label: 'Support',
                items: [
                    { label: 'Documentation', icon: 'pi pi-fw pi-question', routerLink: ['/documentation'], roles: ['Admin', 'Principal', 'Teacher', 'Student'] },
                    { label: 'Contact Support', icon: 'pi pi-fw pi-envelope', routerLink: ['/contact-support'], roles: ['Admin', 'Principal', 'Teacher', 'Student'] }
                ]
            }
        ];
    }

    private filterByRole(menu: any[], role: string): any[] {
        return menu
            .map(section => {
                const allowedItems = section.items.filter(item => item.roles.includes(role));
                return allowedItems.length > 0 ? { ...section, items: allowedItems } : null;
            })
            .filter(section => section !== null);
    }
}
