import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeFrameComponent } from './components/youtube-frame/youtube-frame.component';
import { CardComponent } from './components/card/card.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';

@NgModule({
  declarations: [
    YoutubeFrameComponent,
    CardComponent,
    SimpleCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YoutubeFrameComponent,
    CardComponent,
    SimpleCardComponent
  ]
})
export class SharedModule { }
