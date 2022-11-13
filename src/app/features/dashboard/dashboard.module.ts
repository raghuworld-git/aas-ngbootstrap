import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapArrowRight,bootstrapCalendar2Event,bootstrapCCircle } from '@ng-icons/bootstrap-icons';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ bootstrapArrowRight,bootstrapCalendar2Event,bootstrapCCircle }),

    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
