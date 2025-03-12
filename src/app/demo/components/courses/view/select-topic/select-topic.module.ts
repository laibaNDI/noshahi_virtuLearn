
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectTopicRoutingModule } from './select-topic-routing.module';
import { SelectTopicComponent } from './select-topic.component';

@NgModule({
  imports: [
    CommonModule,
    SelectTopicRoutingModule,
    FormsModule,
  ],
  declarations: [SelectTopicComponent]
})
export class SelectTopicModule { }
