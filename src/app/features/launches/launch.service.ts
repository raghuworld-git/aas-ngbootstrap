import { Injectable } from '@angular/core';
import { CustomHttpService } from '@core/services/customHttp.service';
import { LaunchDetail } from '@models/launches/launchDetail.model';
import { SimpleLaunch } from '@models/launches/SimpleLaunch.model';
import { lldevResult } from '@models/lldevResult.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaunchService {
  constructor(private _httpService: CustomHttpService) {}

  private launchBaseURL: string = 'Launches';
  private getlaunchBySlugURL: string = `${this.launchBaseURL}/GetlaunchBySlug`;

  private getUpcominglaunchsURL: string = `${this.launchBaseURL}/GetUpcomingLaunches`;

  private getPreviouslaunchsURL: string = `${this.launchBaseURL}/GetPreviousLaunches`;

  getLaunchInfo(slug: string): Observable<LaunchDetail> {
    return this._httpService.get<LaunchDetail>(
      `${this.getlaunchBySlugURL}/${slug}`
    );
  }
  getUpcomingLaunches(
    page: number,
    limit: number
  ): Observable<lldevResult<SimpleLaunch>> {
    return this._httpService.get<lldevResult<SimpleLaunch>>(
      `${this.getUpcominglaunchsURL}/${page}/${limit}`
    );
  }

  getPreviousLaunches(
    page: number,
    limit: number
  ): Observable<lldevResult<SimpleLaunch>> {
    return this._httpService.get<lldevResult<SimpleLaunch>>(
      `${this.getPreviouslaunchsURL}/${page}/${limit}`
    );
  }

  getLaunchStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'go':
      case 'success':
        return 'success';

      case 'tbc':
      case 'tbd':
        return 'primary';
      case 'failure':
      case 'partial failure':
        return 'danger';
      case 'hold':
      case 'in flight':
        return 'warning';
      default:
        return 'primary';
    }
  }
}
