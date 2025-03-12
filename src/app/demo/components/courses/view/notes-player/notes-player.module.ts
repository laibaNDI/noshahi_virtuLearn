
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotesPlayerRoutingModule } from './notes-player-routing.module';
import { NotesPlayerComponent } from './notes-player.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    NotesPlayerRoutingModule,
    FormsModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [NotesPlayerComponent
  ]
})
export class NotesPlayerModule { }
