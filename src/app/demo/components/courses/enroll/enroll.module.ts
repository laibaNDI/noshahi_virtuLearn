import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollComponent } from './enroll.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        EnrollRoutingModule,
        FormsModule // Add FormsModule here

    ],
    declarations: [EnrollComponent]
})
export class EnrollModule { }
