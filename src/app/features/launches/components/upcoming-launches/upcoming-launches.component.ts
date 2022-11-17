import { Component, OnDestroy, OnInit } from '@angular/core';
import { LaunchService } from '@features/launches/launch.service';
import { SimpleLaunch } from '@models/launches/SimpleLaunch.model';
import { lldevResult } from '@models/lldevResult.model';
import { LaunchUtilService } from '@shared/services/launch-Util.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upcoming-launches',
  templateUrl: './upcoming-launches.component.html',
  styleUrls: ['./upcoming-launches.component.scss'],
})
export class UpcomingLaunchesComponent implements OnInit, OnDestroy {
  constructor(
    private _launchService: LaunchService,
    public _launchUtilService: LaunchUtilService
  ) {}

  private _launchServiceSub: Subscription | null;

  upcomingLaunchesList: lldevResult<SimpleLaunch> = { count: -1, results: [] };
  totalLaunchRecords: number = 0;
  perpageItemsSize: number = 6;
  incomingPageChangedByUser: number = 0;
  currentPage: number = 1;
  iscrewedCheckbox: boolean = false;

  ngOnInit(): void {
    this.getUpcomingLaunches(
      this.incomingPageChangedByUser,
      this.perpageItemsSize,
      false,
      0,
      true
    );
  }

  ngOnDestroy(): void {
    this._launchServiceSub?.unsubscribe();
  }

  onPagination(event: number) {
    this.currentPage = event;
    this.getUpcomingLaunches(event - 1, this.perpageItemsSize);
  }

  isCrewed(data: any) {
    // this.iscrewedCheckbox = data.target.checked;
    this.currentPage = 1;
    this.getUpcomingLaunches(
      0,
      this.perpageItemsSize,
      data.target.checked,
      0,
      true
    );
  }

  private getUpcomingLaunches(
    page: number,
    limit: number,
    isCrewed: boolean = false,
    lstatus: number = 0,
    isInitial: boolean = false
  ) {
    this._launchServiceSub = this._launchService
      .getUpcomingLaunches(page, limit, isCrewed, lstatus)
      .subscribe((data) => {
        this.upcomingLaunchesList = data;
        if (isInitial) {
          this.totalLaunchRecords = this.upcomingLaunchesList.count;
        }
      });
  }
}
