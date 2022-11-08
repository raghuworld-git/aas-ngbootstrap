import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';
import { TextTrimDirective } from './directives/text-trim.directive';
import { VideoPlayerFrameComponent } from './components/videoplayer-frame/videoplayer-frame.component';

@NgModule({
  declarations: [
    VideoPlayerFrameComponent,
    CardComponent,
    SimpleCardComponent,
    SimpleModalComponent,
    
    TextTrimDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VideoPlayerFrameComponent,
    CardComponent,
    SimpleCardComponent,
    SimpleModalComponent,

    TextTrimDirective
  ]
})
export class SharedModule { }
