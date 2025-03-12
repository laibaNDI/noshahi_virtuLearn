// add-chapters.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddChaptersRoutingModule } from './add-chapters-routing.module';
import { AddChaptersComponent } from './add-chapters.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        AddChaptersRoutingModule,
        TableModule,
        FormsModule,
        ButtonModule,
        DialogModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        ToastModule,
        RouterModule
    ],
    declarations: [AddChaptersComponent]
})
export class AddChaptersModule { }
