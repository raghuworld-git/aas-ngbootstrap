import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '@features/dashboard/dashboard.service';
import { faCalendarDay, faCircleChevronRight,faCopyright } from '@fortawesome/free-solid-svg-icons';
import { dashboard } from '@models/dashboard/dashboard.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private _dashboarService: DashboardService) { }

  faCalendarDay = faCalendarDay;
  faCircleChevronRight = faCircleChevronRight;
  faCopyright = faCopyright;

  dashboardResult: dashboard | null;

  private $dashboardservice: Subscription;

  ngOnInit(): void {
    this.$dashboardservice = this._dashboarService.getAllDashboardData().subscribe(
      (data) => {
        this.dashboardResult = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.$dashboardservice?.unsubscribe();
  }

}
