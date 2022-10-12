import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from '@features/dashboard/dashboard.service';
import { faCalendarDay, faCircleChevronRight, faRocket,faCopyright } from '@fortawesome/free-solid-svg-icons';
import { dashboard } from '@models/dashboard/dashboard.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private _dashboarService: DashboardService) { }

  faCalendarDay = faCalendarDay;
  faRocket = faRocket;
  faCircleChevronRight = faCircleChevronRight;
  faCopyright = faCopyright;

  dashboardResult: dashboard | null;

  private $dashboardservice: Subscription;

  astronaut = "https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/astronaut_images/albert2520sacco_image_20190211162452.jpeg";


  ngOnInit(): void {
    this.$dashboardservice = this._dashboarService.getAllDashboardData().subscribe(
      (data) => {
        this.dashboardResult = data;
      }
    );
  }

  ngOnDestroy(): void {
    this.$dashboardservice?.unsubscribe();
  }

}
