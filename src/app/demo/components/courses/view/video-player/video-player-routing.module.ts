
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: VideoPlayerComponent }
  ])],
  exports: [RouterModule]
})
export class VideoPlayerRoutingModule { }
