import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollComponent } from './enroll.component';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';

@NgModule({
    imports: [
        CommonModule,
        EnrollRoutingModule,
        FormsModule, // Add FormsModule here
        DialogModule,
        ButtonModule,
        DropdownModule,
        CheckboxModule,    

    ],
    declarations: [EnrollComponent]
})
export class EnrollModule { }
