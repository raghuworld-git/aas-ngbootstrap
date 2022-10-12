import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesComponent } from './components/launches/launches.component';
import { LaunchDetailComponent } from './components/launch-detail/launch-detail.component';
import { LaunchesRoutingModule } from './launches-routing.module';



@NgModule({
  declarations: [
    LaunchesComponent,
    LaunchDetailComponent
  ],
  imports: [
    CommonModule,
    LaunchesRoutingModule
  ]
})
export class LaunchesModule { }
