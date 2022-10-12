import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeFrameComponent } from './components/youtube-frame/youtube-frame.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    YoutubeFrameComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YoutubeFrameComponent,
    CardComponent
  ]
})
export class SharedModule { }
