
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { VideoPlayerComponent } from './video-player.component';

@NgModule({
  imports: [
    CommonModule,
    VideoPlayerRoutingModule,
    FormsModule
  ],
  declarations: [VideoPlayerComponent]
})
export class VideoPlayerModule { }
