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
  iscrewedCheckbox: boolean = false;

  ngOnInit(): void {

    this.getPreviousLaunches(
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
    this.getPreviousLaunches(event-1, this.perpageItemsSize);
  }

  isCrewed(data: any) {

    this.currentPage = 1;
    this.getPreviousLaunches(
      0,
      this.perpageItemsSize,
      data.target.checked,
      0,
      true
    );     
  }

  private getPreviousLaunches(
    page: number,
    limit: number,
    isCrewed: boolean = false,
    lstatus: number = 0,
    isInitial: boolean = false
  ) {
    this._launchServiceSub = this._launchService
      .getPreviousLaunches(page, limit,isCrewed,lstatus)
      .subscribe((data) => {
        this.previousLaunchesList = data;
        if (isInitial) {
          this.totalLaunchRecords = this.previousLaunchesList.count;
        }
      });
  }
}
