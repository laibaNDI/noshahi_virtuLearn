import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesRoutingModule } from './courses-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule, // Import FormsModule for two-way binding
        CoursesRoutingModule,
        ToolbarModule,  // PrimeNG Toolbar
        ButtonModule,   // PrimeNG Buttons
        DropdownModule,
        ReactiveFormsModule, // PrimeNG 
        ConfirmDialogModule // ✅ Add Confirm Dialog Modul,
    ]
})
export class CoursesModule { }
