import { Component } from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-student-overall-detail',
  templateUrl: './student-overall-detail.component.html',
  styleUrls: ['./student-overall-detail.component.scss']
})
export class StudentOverallDetailComponent {
  student: any;

  constructor(
    public config: DynamicDialogConfig
  ) {
    this.student = config.data.student;
  }
}
