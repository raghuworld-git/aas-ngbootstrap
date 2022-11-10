import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CustomHttpService } from '@core/services/customHttp.service';
import { LaunchDetail } from '@models/launches/launchDetail.model';
import { SimpleLaunch } from '@models/launches/SimpleLaunch.model';
import { lldevResult } from '@models/lldevResult.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor(private _httpService: CustomHttpService,private _router:Router) { }

  private noDataAvailable: string = 'No Data available';
  private launchBaseURL: string = 'Launches';
  private getlaunchBySlugURL: string = `${this.launchBaseURL}/GetlaunchBySlug`;

  private getUpcominglaunchsURL: string = `${this.launchBaseURL}/GetUpcomingLaunches`;

  private getPreviouslaunchsURL: string = `${this.launchBaseURL}/GetPreviousLaunches`;

  getLaunchInfo(slug: string): Observable<LaunchDetail> {
    return this._httpService.get<LaunchDetail>(
      `${this.getlaunchBySlugURL}/${slug}`
    ).pipe(map(data => {
      if (!this.hasData(data.rocket?.configuration?.description)) {
        data.rocket.configuration.description = this.noDataAvailable;
      }
      if (!this.hasData(data.mission?.description)) {
        data.mission.description = this.noDataAvailable;
      }     
      if(['partial failure','failure'].includes(data.status.abbrev.toLowerCase())){
        data.isFailed = true;
        data.failHoldreason = data.failreason;
      }
      if(data.status.abbrev.toLowerCase()=='hold'){
        data.isHold = true;
        data.failHoldreason = data.holdreason;
      }
       
      if (!this.hasData(data.failHoldreason)) {
        data.failHoldreason = this.noDataAvailable;
      }
      return data;
    }));
  }

  getUpcomingLaunches(
    page: number,
    limit: number
  ): Observable<lldevResult<SimpleLaunch>> {
    return this._httpService.get<lldevResult<SimpleLaunch>>(
      `${this.getUpcominglaunchsURL}/${page}/${limit}`
    );
  }

  getLaunchesUsingRouting(page: number, isUpcoming: boolean = true) {
    if(isUpcoming){
      this._router.navigate(['/launches/upcoming'],{queryParams:{page:page-1}});
    }    
    else{
      this._router.navigate(['/launches/previous'],{queryParams:{page:page-1}});
    }
  }

  getPreviousLaunches(
    page: number,
    limit: number
  ): Observable<lldevResult<SimpleLaunch>> {
    return this._httpService.get<lldevResult<SimpleLaunch>>(
      `${this.getPreviouslaunchsURL}/${page}/${limit}`
    );
  }


  private hasData(data: any): boolean {
    if (data == undefined || data == null || data == "") {
      return false;
    }
    return true;
  }
}
