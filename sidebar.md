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
        // Commented out existing menus
        /*
        this.model = [
            // Existing menu structure commented out
        ];
        */

        // New menu structure with PrimeIcons added
        this.model = [
            {
                label: 'Principal',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/principal/dashboard'] },
                    { label: 'Manage Teachers', icon: 'pi pi-users', routerLink: ['/principal/manage-teachers'] },
                    { label: 'Manage Students', icon: 'pi pi-user', routerLink: ['/principal/manage-students'] },
                    { label: 'Class Schedules', icon: 'pi pi-calendar', routerLink: ['/principal/class-schedules'] },
                    { label: 'Attendance Reports', icon: 'pi pi-chart-line', routerLink: ['/principal/attendance-reports'] },
                    { label: 'Performance Reports', icon: 'pi pi-chart-bar', routerLink: ['/principal/performance-reports'] },
                    { label: 'Fee Collection', icon: 'pi pi-wallet', routerLink: ['/principal/fee-collection'] },
                    { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/principal/settings'] },
                    { label: 'Help/Support', icon: 'pi pi-question-circle', routerLink: ['/help'] }
                ]
            },
            {
                label: 'Teacher',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/teacher/dashboard'] },
                    { label: 'My Classes', icon: 'pi pi-folder', routerLink: ['/teacher/my-classes'] },
                    { label: 'Attendance', icon: 'pi pi-check', routerLink: ['/teacher/attendance'] },
                    { label: 'Assignments', icon: 'pi pi-pencil', routerLink: ['/teacher/assignments'] },
                    { label: 'Student Progress', icon: 'pi pi-chart-line', routerLink: ['/teacher/student-progress'] },
                    { label: 'Exam Schedules', icon: 'pi pi-calendar-plus', routerLink: ['/teacher/exam-schedules'] },
                    { label: 'Grade Submissions', icon: 'pi pi-file-edit', routerLink: ['/teacher/grade-submissions'] },
                    { label: 'Resources', icon: 'pi pi-folder-open', routerLink: ['/teacher/resources'] },
                    { label: 'Settings', icon: 'pi pi-cog', routerLink: ['/teacher/settings'] }
                ]
            },
            {
                label: 'Student',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/student/dashboard'] },
                    { label: 'My Classes', icon: 'pi pi-folder', routerLink: ['/student/my-classes'] },
                    { label: 'Assignments', icon: 'pi pi-pencil', routerLink: ['/student/assignments'] },
                    { label: 'Attendance', icon: 'pi pi-check', routerLink: ['/student/attendance'] },
                    { label: 'Exam Results', icon: 'pi pi-chart-line', routerLink: ['/student/exam-results'] },
                    { label: 'Resources', icon: 'pi pi-folder-open', routerLink: ['/student/resources'] },
                    { label: 'Schedule', icon: 'pi pi-calendar', routerLink: ['/student/schedule'] },
                    { label: 'Help/Support', icon: 'pi pi-question-circle', routerLink: ['/help'] }
                ]
            }
        ];
    }
}
