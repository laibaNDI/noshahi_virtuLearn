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
import { AddTopicsRoutingModule } from './add-topics-routing.module';
import { AddTopicsComponent } from './add-topics.component';

@NgModule({
    imports: [
        CommonModule,
        AddTopicsRoutingModule,
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
    declarations: [AddTopicsComponent]
})
export class AddTopicsModule { }
