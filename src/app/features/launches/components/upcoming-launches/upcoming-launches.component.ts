import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchService } from '@features/launches/launch.service';
import { faArrowLeft, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { SimpleLaunch } from '@models/launches/SimpleLaunch.model';
import { lldevResult } from '@models/lldevResult.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upcoming-launches',
  templateUrl: './upcoming-launches.component.html',
  styleUrls: ['./upcoming-launches.component.scss'],
})
export class UpcomingLaunchesComponent implements OnInit, OnDestroy {
  constructor(public _launchService: LaunchService, private _route: ActivatedRoute,private _router:Router) {}

  private _launchServiceSub: Subscription | null;

  upcomingLaunchesList: lldevResult<SimpleLaunch> = { count: 0, results: [] };
  currentPage:number=1;
  totalLaunchRecords:number=0;
  perpageItemsSize:number=6;

  faCalendarDay = faCalendarDay;
  faArrowLeft= faArrowLeft;

  ngOnInit(): void {
    this.getUpcomingLaunches(0, this.perpageItemsSize,true);
  }

  ngOnDestroy(): void {
    this._launchServiceSub?.unsubscribe();
  }

  onPagination(event: number) {
    this.getUpcomingLaunches(event - 1, this.perpageItemsSize);
    //this._router.navigate([event],{relativeTo:this._route});
  }

  private getUpcomingLaunches(page: number, limit: number,isInitial:boolean=false) {
    this._launchServiceSub = this._launchService
      .getUpcomingLaunches(page, limit)
      .subscribe((data) => {
        this.upcomingLaunchesList = data;
        if(isInitial){
          this.totalLaunchRecords = this.upcomingLaunchesList.count;
        }
      });
  }
}
