import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StudentManagementComponent } from './student-management.component';
import { StudentRoutingModule } from './student-routing.module';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        DropdownModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        StudentRoutingModule,
        ToastModule, // ✅ Add ToastModule here
        ConfirmDialogModule // ✅ Add Confirm Dialog Modul,
        
    ],
    declarations: [StudentManagementComponent],
    providers: [MessageService, ConfirmationService]
})
export class StudentModule { }
