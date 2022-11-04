import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { PreviousLaunchesComponent } from './components/previous-launches/previous-launches.component';
import { UpcomingLaunchesComponent } from './components/upcoming-launches/upcoming-launches.component';


const routes: Routes = [
  {
    path: 'upcoming',
    component: UpcomingLaunchesComponent,
  },
  {
    path: 'upcoming/:page',
    component: UpcomingLaunchesComponent,
  },
  {
    path: 'previous',
    component: PreviousLaunchesComponent,
  },
  {
    path: 'previous/:page',
    component: PreviousLaunchesComponent,
  },
  {
    path: ':slug',
    component: LaunchDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchesRoutingModule {}
