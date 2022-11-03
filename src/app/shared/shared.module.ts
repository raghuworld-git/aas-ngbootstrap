import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeFrameComponent } from './components/youtube-frame/youtube-frame.component';
import { CardComponent } from './components/card/card.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';
import { TextTrimDirective } from './directives/text-trim.directive';

@NgModule({
  declarations: [
    YoutubeFrameComponent,
    CardComponent,
    SimpleCardComponent,
    SimpleModalComponent,
    
    TextTrimDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    YoutubeFrameComponent,
    CardComponent,
    SimpleCardComponent,
    SimpleModalComponent,

    TextTrimDirective
  ]
})
export class SharedModule { }
