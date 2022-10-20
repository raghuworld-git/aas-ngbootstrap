import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { UpcomingLaunchesComponent } from './components/upcoming-launches/upcoming-launches.component';
import { PreviousLaunchesComponent } from './components/previous-launches/previous-launches.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LaunchDetailComponent,
    UpcomingLaunchesComponent,
    PreviousLaunchesComponent
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
    LaunchesRoutingModule
  ]
})
export class LaunchesModule { }
