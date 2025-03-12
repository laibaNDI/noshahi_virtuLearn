// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';
// import { ViewComponent } from './view.component';
// import { SelectChapterComponent } from './select-chapter/select-chapter.component';
// import { SelectBookComponent } from './select-book/select-book.component';
// import { SelectTopicComponent } from './select-topic/select-topic.component';
// import { Quiz1Component } from './quiz1/quiz1.component';
// import { ReactiveFormsModule } from '@angular/forms';
// import { MatCardModule } from '@angular/material/card';
// import { VideoPlayerComponent } from './video-player/video-player.component';
// import { NotesPlayerComponent } from './notes-player/notes-player.component';

// const routes: Routes = [
//   { path: '', component: ViewComponent },
//   { path: 'select-chapter', component: SelectChapterComponent },
//   { path: 'select-book', component: SelectBookComponent }, // Fixed duplicate route issue
//   { path: 'select-topic', component: SelectTopicComponent }, // Fixed duplicate route issue
//   { path: 'quiz1', component: Quiz1Component }, // Fixed duplicate route issue
//   { path: 'video-player', component: VideoPlayerComponent },
//   { path: 'notes-player', component: NotesPlayerComponent },
// ];

// @NgModule({
//   declarations: [ViewComponent, SelectChapterComponent, SelectBookComponent, SelectTopicComponent, Quiz1Component, VideoPlayerComponent, NotesPlayerComponent],
//   imports: [CommonModule, ReactiveFormsModule, MatCardModule, RouterModule.forChild(routes)],
// })
// export class ViewModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view.component';
import { SelectChapterComponent } from './select-chapter/select-chapter.component';
import { SelectBookComponent } from './select-book/select-book.component';
import { SelectTopicComponent } from './select-topic/select-topic.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { NotesPlayerComponent } from './notes-player/notes-player.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer'; // ✅ PDF Viewer Module

const routes: Routes = [
  { path: '', component: ViewComponent },
  { path: 'select-chapter', component: SelectChapterComponent },
  { path: 'select-book', component: SelectBookComponent },
  { path: 'select-topic', component: SelectTopicComponent },
  { path: 'quiz1', component: Quiz1Component },
  { path: 'video-player', component: VideoPlayerComponent },
  { path: 'notes-player', component: NotesPlayerComponent }, // ✅ PDF Player Route
];

@NgModule({
  declarations: [
    ViewComponent,
    SelectChapterComponent,
    SelectBookComponent,
    SelectTopicComponent,
    Quiz1Component,
    VideoPlayerComponent,
    NotesPlayerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    NgxExtendedPdfViewerModule, // ✅ PDF Viewer Module Imported
    RouterModule.forChild(routes)
  ]
})
export class ViewModule {}
