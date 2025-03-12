import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';
import { SelectChapterComponent } from './select-chapter/select-chapter.component';
import { SelectBookComponent } from './select-book/select-book.component';
import { SelectTopicComponent } from './select-topic/select-topic.component'; // Added SelectTopicComponent
import { Quiz1Component } from './quiz1/quiz1.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { NotesPlayerComponent } from './notes-player/notes-player.component';

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'select-chapter', component: SelectChapterComponent },
  { path: 'select-book', component: SelectBookComponent },
  { path: 'select-topic', component: SelectTopicComponent }, // Added Select Topic route
  { path: 'quiz1', component: Quiz1Component }, // Added Select Topic route
  { path: 'video-player', component: VideoPlayerComponent },
  { path: 'notes-player', component: NotesPlayerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule {}
