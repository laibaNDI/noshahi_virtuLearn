
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NotesPlayerComponent } from './notes-player.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NotesPlayerComponent }
  ])],
  exports: [RouterModule]
})
export class NotesPlayerRoutingModule { }
