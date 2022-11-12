import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LaunchService } from '@features/launches/launch.service';
import { LaunchDetail } from '@models/launches/launchDetail.model';
import { Subscription } from 'rxjs';
import {
  faArrowLeft,
  faMapMarkerAlt,
  faCalendarDay,
  faVideo,
  faVideoSlash,
} from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SimpleModalComponent } from '@shared/components/simple-modal/simple-modal.component';
import { LaunchUtilService } from '@shared/services/launch-Util.service';

@Component({
  selector: 'app-launch-detail',
  templateUrl: './launch-detail.component.html',
  styleUrls: ['./launch-detail.component.scss'],
})
export class LaunchDetailComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    private modalService: NgbModal,
    private _launchService: LaunchService,
    private _launchutilService: LaunchUtilService
  ) {}

  private slug: string | null;
  private _launchServiceSubs: Subscription;

  launchInfo: LaunchDetail | null = null;
  faArrowLeft = faArrowLeft;
  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarDay = faCalendarDay;
  faVideo = faVideo;
  faVideoSlash = faVideoSlash;

  launchStatusColor: string;

  ngOnInit(): void {
    this._route.paramMap.subscribe((data: ParamMap) => {
      this.slug = data.get('slug');
    });

    this._launchServiceSubs = this._launchService
      .getLaunchInfo(this.slug!)
      .subscribe({
        next: (data) => {
          this.launchInfo = data;
          this.launchStatusColor = this._launchutilService.getLaunchStatusColor(
            data.status.abbrev
          );
        },
      });
  }

  ngOnDestroy(): void {
    this._launchServiceSubs?.unsubscribe();
  }

  open(text: string | undefined) {
    const modalRef = this.modalService.open(SimpleModalComponent, {
      scrollable: true,
      centered: true,
    });
    modalRef.componentInstance.text = text;
  }
}
