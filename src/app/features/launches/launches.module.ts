import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchesRoutingModule } from './launches-routing.module';
import { PreviousLaunchesComponent } from './components/previous-launches/previous-launches.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '@shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
    FontAwesomeModule,
    LaunchesRoutingModule,
    SharedModule
  ]
})
export class LaunchesModule { }
