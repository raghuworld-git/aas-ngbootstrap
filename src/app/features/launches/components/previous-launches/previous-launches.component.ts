import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaunchService } from '@features/launches/launch.service';
import { faArrowLeft, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { SimpleLaunch } from '@models/launches/SimpleLaunch.model';
import { lldevResult } from '@models/lldevResult.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-previous-launches',
  templateUrl: './previous-launches.component.html',
  styleUrls: ['./previous-launches.component.scss']
})
export class PreviousLaunchesComponent implements OnInit {

  constructor(public _launchService: LaunchService, private _route: ActivatedRoute,private _router:Router) {}

  private _launchServiceSub: Subscription | null;

  previousLaunchesList: lldevResult<SimpleLaunch> = { count: 0, results: [] };
  currentPage:number=1;
  totalLaunchRecords:number=0;
  perpageItemsSize:number=6;

  faCalendarDay = faCalendarDay;
  faArrowLeft= faArrowLeft;

  ngOnInit(): void {
    this.getPreviousLaunches(0, this.perpageItemsSize,true);
  }

  ngOnDestroy(): void {
    this._launchServiceSub?.unsubscribe();
  }

  onPagination(event: number) {
    this.getPreviousLaunches(event - 1, this.perpageItemsSize);
    //this._router.navigate([event],{relativeTo:this._route});
  }

  private getPreviousLaunches(page: number, limit: number,isInitial:boolean=false) {
    this._launchServiceSub = this._launchService
      .getPreviousLaunches(page, limit)
      .subscribe((data) => {
        this.previousLaunchesList = data;
        if(isInitial){
          this.totalLaunchRecords = this.previousLaunchesList.count;
        }
      });
  }
}
