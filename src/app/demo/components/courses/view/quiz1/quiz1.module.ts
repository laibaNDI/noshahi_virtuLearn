import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Quiz1RoutingModule } from './quiz1-routing.module';
import { Quiz1Component } from './quiz1.component';

// ✅ Import Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [Quiz1Component],
  imports: [
    CommonModule,
    Quiz1RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,      // ✅ Fix for <mat-card>
    MatButtonModule,     // ✅ Fix for <button mat-button>
    MatRadioModule,      // ✅ Fix for <mat-radio-group>
    MatFormFieldModule,  // ✅ Fix for <mat-form-field>
    MatInputModule       // ✅ Fix for <mat-input>
  ]
})
export class Quiz1Module { }
