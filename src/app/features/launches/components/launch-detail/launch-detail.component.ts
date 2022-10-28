import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LaunchService } from '@features/launches/launch.service';
import { LaunchDetail } from '@models/launches/launchDetail.model';
import { Subscription } from 'rxjs';
import { faCalendarDay,faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    public _launchService: LaunchService
  ) {}

  private slug: string | null;
  private _launchServiceSubs: Subscription;

  launchInfo: LaunchDetail | null = null;
  faCalendarDay = faCalendarDay;
  faLocationDot = faLocationDot;

  ngOnInit(): void {
    this._route.paramMap.subscribe((data: ParamMap) => {
      this.slug = data.get('slug');
    });

    this._launchServiceSubs = this._launchService
      .getLaunchInfo(this.slug!)
      .subscribe({
        next: (data) => {
          this.launchInfo = data;
        },
      });
  }

  ngOnDestroy(): void {
    this._launchServiceSubs?.unsubscribe();
  }
}
