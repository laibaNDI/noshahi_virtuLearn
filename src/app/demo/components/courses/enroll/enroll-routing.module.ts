import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnrollComponent } from './enroll.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: EnrollComponent }
    ])],
    exports: [RouterModule]
})
export class EnrollRoutingModule { }
