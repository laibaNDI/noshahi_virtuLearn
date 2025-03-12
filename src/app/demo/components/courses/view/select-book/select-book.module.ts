import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectBookRoutingModule } from './select-book-routing.module';
import { SelectBookComponent } from './select-book.component';

@NgModule({
  imports: [
    CommonModule,
    SelectBookRoutingModule,
    FormsModule
  ],
  declarations: [SelectBookComponent]
})
export class SelectBookModule { }
