import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { StudentEnrollmentRoutingModule } from './student-enrollment-routing.module';
import { StudentEnrollmentComponent } from './student-enrollment.component';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
    imports: [
        CommonModule,
        TableModule,
        DropdownModule,
        ButtonModule,
        DialogModule,
        FormsModule,  // ✅ Required for [(ngModel)]
        StudentEnrollmentRoutingModule,
        FormsModule,
        InputTextModule,
        CalendarModule,
        TableModule,
        ToastModule,
        ConfirmDialogModule

    ],
    declarations: [StudentEnrollmentComponent],
    providers: [MessageService, ConfirmationService]
})
export class StudentEnrollmentModule { }
