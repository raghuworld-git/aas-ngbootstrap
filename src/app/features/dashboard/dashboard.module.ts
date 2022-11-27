import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapArrowRight, bootstrapCalendar2EventFill, bootstrapCCircle } from '@ng-icons/bootstrap-icons';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '@shared/shared.module';
import { DashboardService } from './dashboard.service';

const bootstrapIcons = { bootstrapArrowRight, bootstrapCalendar2EventFill, bootstrapCCircle };

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons(bootstrapIcons),

    DashboardRoutingModule,
    SharedModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }

