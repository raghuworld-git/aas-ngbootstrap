import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCalendar2Event, bootstrapArrowLeft, bootstrapPinMap, bootstrapYoutube } from '@ng-icons/bootstrap-icons'
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { PreviousLaunchesComponent } from './components/previous-launches/previous-launches.component';
import { SharedModule } from '@shared/shared.module';
import { UpcomingLaunchesComponent } from './components/upcoming-launches/upcoming-launches.component';



@NgModule({
  declarations: [
    LaunchDetailComponent,
    PreviousLaunchesComponent,
    UpcomingLaunchesComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgIconsModule.withIcons({ bootstrapCalendar2Event, bootstrapArrowLeft, bootstrapPinMap, bootstrapYoutube }),
    LaunchesRoutingModule,
    SharedModule
  ]
})
export class LaunchesModule { }
