import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '@features/dashboard/dashboard.service';
import { dashboard } from '@models/dashboard/dashboard.model';
import { LaunchUtilService } from '@shared/services/launch-Util.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  constructor(
    private _dashboarService: DashboardService,
    private _launchUtilService: LaunchUtilService
  ) { }

  dashboardResult: dashboard | null;
  launchStatusColor: string;

  private $dashboardservice: Subscription;

  ngOnInit(): void {
    this.$dashboardservice = this._dashboarService
      .getAllDashboardData()
      .subscribe((data) => {
        this.dashboardResult = data;
        this.launchStatusColor = this._launchUtilService.getLaunchStatusColor(data.upcomingLaunch?.launchStatus?.abbrev!);
      });
  }

  ngOnDestroy(): void {
    this.$dashboardservice?.unsubscribe();
  }
}
