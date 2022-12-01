import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import {
  bootstrapCalendar2EventFill,
  bootstrapPinMap,
  bootstrapYoutube,
  bootstrapBoxArrowUpRight,
  bootstrapPencilSquare,
  bootstrapInfoCircleFill
} from '@ng-icons/bootstrap-icons';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { PreviousLaunchesComponent } from './components/previous-launches/previous-launches.component';
import { SharedModule } from '@shared/shared.module';
import { UpcomingLaunchesComponent } from './components/upcoming-launches/upcoming-launches.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LaunchService } from './launch.service';

@NgModule({
  declarations: [
    LaunchDetailComponent,
    PreviousLaunchesComponent,
    UpcomingLaunchesComponent,
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgbPopoverModule,
    NgIconsModule.withIcons({
      bootstrapCalendar2EventFill,
      bootstrapPinMap,
      bootstrapYoutube,
      bootstrapBoxArrowUpRight,
      bootstrapPencilSquare,
      bootstrapInfoCircleFill
    }),
    LaunchesRoutingModule,
    SharedModule,
  ],
  providers: [LaunchService],
})
export class LaunchesModule {}
