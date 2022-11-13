import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LaunchService } from '@features/launches/launch.service';
import { SimpleLaunch } from '@models/launches/SimpleLaunch.model';
import { lldevResult } from '@models/lldevResult.model';
import { LaunchUtilService } from '@shared/services/launch-Util.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-previous-launches',
  templateUrl: './previous-launches.component.html',
  styleUrls: ['./previous-launches.component.scss'],
})
export class PreviousLaunchesComponent implements OnInit {
  constructor(
    public _launchService: LaunchService,
    public _launchUtilService: LaunchUtilService,
    private _route: ActivatedRoute
  ) {}

  private _launchServiceSub: Subscription | null;

  previousLaunchesList: lldevResult<SimpleLaunch> = { count: -1, results: [] };
  currentPage: number = 1;
  totalLaunchRecords: number = 0;
  perpageItemsSize: number = 6;
  incomingPageChangedByUser: number = 0;

  ngOnInit(): void {
    this._route.queryParamMap.subscribe((data: ParamMap) => {
      if (Number(data.get('page'))) {
        this.incomingPageChangedByUser = Number(data.get('page'));
      } else {
        this.incomingPageChangedByUser = 0;
      }
      this.getPreviousLaunches(
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
    this._launchService.getLaunchesUsingRouting(event, false);
  }

  private getPreviousLaunches(
    page: number,
    limit: number,
    isInitial: boolean = false
  ) {
    this._launchServiceSub = this._launchService
      .getPreviousLaunches(page, limit)
      .subscribe((data) => {
        this.previousLaunchesList = data;
        if (isInitial) {
          this.totalLaunchRecords = this.previousLaunchesList.count;
        }
      });
  }
}
