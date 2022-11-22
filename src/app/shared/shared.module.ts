import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SimpleCardComponent } from './components/simple-card/simple-card.component';
import { SimpleModalComponent } from './components/simple-modal/simple-modal.component';
import { TextTrimDirective } from './directives/text-trim.directive';
import { VideoPlayerFrameComponent } from './components/videoplayer-frame/videoplayer-frame.component';
import { LaunchStatusComponent } from './components/launch-status/launch-status.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule, PaginatePipe } from 'ngx-pagination';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CardsListPlaceholderComponent } from './components/cards-list-placeholder/cards-list-placeholder.component';

@NgModule({
  declarations: [
    VideoPlayerFrameComponent,
    CardComponent,
    SimpleCardComponent,
    SimpleModalComponent,
    LaunchStatusComponent,
    PaginationComponent,
    UserProfileComponent,
    CardsListPlaceholderComponent,
    TextTrimDirective,
  ],
  imports: [CommonModule, NgxPaginationModule],
  exports: [
    VideoPlayerFrameComponent,
    CardComponent,
    SimpleCardComponent,
    SimpleModalComponent,
    LaunchStatusComponent,
    PaginationComponent,
    UserProfileComponent,
    CardsListPlaceholderComponent,

    TextTrimDirective,

    PaginatePipe,
  ],
})
export class SharedModule {}
