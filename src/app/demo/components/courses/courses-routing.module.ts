import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [RouterModule.forChild([
        { path: 'view', loadChildren: () => import('./view/view.module').then(m => m.ViewModule) },
        { path: 'enroll', loadChildren: () => import('./enroll/enroll.module').then(m => m.EnrollModule) },
        { path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule) },
       
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
