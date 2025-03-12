import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { AddChaptersComponent } from './add-chapters/add-chapters.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { AddSubtopicsComponent } from './add-subtopics/add-subtopics.component';

const routes: Routes = [
    { path: '', component: ManageComponent },
    { path: 'add-chapters', component: AddChaptersComponent }, // Route for Add Chapters
	{ path: 'add-topics', component: AddTopicsComponent },// Route for Add Chapters
	{ path: 'add-subtopics', component: AddSubtopicsComponent } // Route for Add Chapters
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManageRoutingModule { }
