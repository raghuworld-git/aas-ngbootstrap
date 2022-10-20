import { Component, OnDestroy, OnInit } from '@angular/core';
import { LaunchService } from '@features/launches/launch.service';
import { SimpleLaunch } from '@models/launches/SimpleLaunch.model';
import { lldevResult } from '@models/lldevResult.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upcoming-launches',
  templateUrl: './upcoming-launches.component.html',
  styleUrls: ['./upcoming-launches.component.scss'],
})
export class UpcomingLaunchesComponent implements OnInit, OnDestroy {
  constructor(private _launchService: LaunchService) {}

  private _launchServiceSub: Subscription | null;

  upcomingLaunchesList: lldevResult<SimpleLaunch>={count:0,results:[]};

  ngOnInit(): void {
    this.getUpcomingLaunches(0, 0);
  }

  ngOnDestroy(): void {
    this._launchServiceSub?.unsubscribe();
  }

  onPagination(event: number) {
    this.getUpcomingLaunches(event - 1, 10);
  }

  private getUpcomingLaunches(page: number, limit: number) {
    this._launchServiceSub = this._launchService
      .getUpcomingLaunches(page, limit)
      .subscribe((data) => {
        this.upcomingLaunchesList = data;
      });
  }
}
