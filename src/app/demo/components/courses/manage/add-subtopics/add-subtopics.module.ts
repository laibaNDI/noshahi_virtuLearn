import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';
import { AddSubtopicsRoutingModule } from './add-subtopics-routing.module';
import { AddSubtopicsComponent } from './add-subtopics.component';

@NgModule({
    imports: [
        CommonModule,
        AddSubtopicsRoutingModule,
        FormsModule,
        TableModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        ToastModule,
        RouterModule
    ],
    declarations: [AddSubtopicsComponent]
})
export class AddSubtopicsModule { }
