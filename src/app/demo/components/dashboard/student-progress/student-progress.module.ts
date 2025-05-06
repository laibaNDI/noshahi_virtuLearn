import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';

import { StudentProgressComponent } from './student-progress.component';
import { StudentProgressRoutingModule } from './student-progress-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentProgressComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DialogModule,
    ProgressBarModule,
    AccordionModule,
    StudentProgressRoutingModule,// ✅ Ensure this is included
    ButtonModule,
    DropdownModule,       // for p-dropdown
    InputTextModule,      // for pInputText
    FormsModule
  ]
})
export class StudentProgressModule { }
