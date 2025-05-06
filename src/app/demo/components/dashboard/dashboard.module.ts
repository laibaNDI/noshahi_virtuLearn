import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

// ✅ Import PrimeNG modules
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StudentProgressModule } from './student-progress/student-progress.module';
import { TeacherManagementModule } from './teacher-management/teacher-management.module';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        DropdownModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        CalendarModule,
        AccordionModule,  // Add Accordion module
        ToastModule,
        DashboardRoutingModule,
        StudentProgressModule, // ✅ Add this to imports
        TeacherManagementModule // ✅ Add this to imports
    ],
    declarations: [DashboardComponent],
    providers: [MessageService, ConfirmationService]
})
export class DashboardModule { }
