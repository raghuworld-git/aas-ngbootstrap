import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
    public _launchUtilService: LaunchUtilService,
    private _route: ActivatedRoute
  ) {}

  private _launchServiceSub: Subscription | null;

  upcomingLaunchesList: lldevResult<SimpleLaunch> = { count: -1, results: [] };
  currentPage: number = 1;
  totalLaunchRecords: number = 0;
  perpageItemsSize: number = 6;
  incomingPageChangedByUser: number = 0;

  ngOnInit(): void {
    this._route.queryParamMap.subscribe((data: ParamMap) => {      
      if (Number(data.get('page')) != NaN) {
        this.incomingPageChangedByUser = Number(data.get('page'));
      } else {
        this.incomingPageChangedByUser = 0;
      }
      this.getUpcomingLaunches(
        this.incomingPageChangedByUser,
        this.perpageItemsSize,
        true
      );
    });
  }

  ngOnDestroy(): void {
    this._launchServiceSub?.unsubscribe();
  }

  onPagination(event: number) {
    // this.getUpcomingLaunches(event - 1, this.perpageItemsSize);
    this._launchService.getLaunchesUsingRouting(event);
  }

  private getUpcomingLaunches(
    page: number,
    limit: number,
    isInitial: boolean = false
  ) {
    this._launchServiceSub = this._launchService
      .getUpcomingLaunches(page, limit)
      .subscribe((data) => {
        this.upcomingLaunchesList = data;        
        if (isInitial) {
          this.totalLaunchRecords = this.upcomingLaunchesList.count;
        }
      });
  }
}
