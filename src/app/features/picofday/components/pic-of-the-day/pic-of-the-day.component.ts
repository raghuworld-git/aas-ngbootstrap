import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepicker,
} from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import {
  faCalendar,
  faCopyright,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { APOD } from '@models/apod/apod.model';
import { PicOfDayService } from '@features/picofday/picofday.service';

@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.scss'],
})
export class PicOfTheDayComponent implements OnInit, OnDestroy {
  constructor(
    private _podService: PicOfDayService,
    private _calender: NgbCalendar
  ) {}

  private podSubscribe: Subscription | null = null;

  faCalendar = faCalendar;
  faCopyright = faCopyright;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  today: NgbDate;
  model: NgbDate;
  isLoading: boolean = false;

  apodStartdate: { year: number; month: number; day: number };
  apodResult: APOD | null = null;

  private selectedDate: NgbDate;

  ngOnInit(): void {
    this.today =this.model = this.selectedDate = this._calender.getToday();
    this.apodStartdate = this._podService.getMinDateOfAPODRepo();
    this.getAPODData(null);
  }

  onDateClickBack() {
    let resultDate: NgbDate = this._calender.getPrev(this.selectedDate, 'd', 1);
    if (this._podService.isDateWithinValidRange(resultDate, this.today)) {
      this.getAPODData(
        this._podService.getFormattedDateWithProperZerosByNgbDate(resultDate)
      );
      this.model = this.selectedDate = resultDate;
    }
  }

  onDateClickNext() {
    let resultDate: NgbDate = this._calender.getNext(this.selectedDate, 'd', 1);
    if (this._podService.isDateWithinValidRange(resultDate, this.today)) {
      this.getAPODData(
        this._podService.getFormattedDateWithProperZerosByNgbDate(resultDate)
      );
      this.model = this.selectedDate = resultDate;
    }
  }

  onDateSelect(event: NgbDate) {
    this.selectedDate = event;
    this.getAPODData(
      this._podService.getFormattedDateWithProperZerosByNgbDate(event)
    );
  }

  ngOnDestroy(): void {
    this.podSubscribe?.unsubscribe();
  }

  private getAPODData(date: string | null) {
    this.isLoading = true;
    this.apodResult = null;
    this.podSubscribe = this._podService.getAPOD(date).subscribe({
      next: (data) => {
        this.apodResult = data;
      },
      complete: () => (this.isLoading = false),
    });
  }

}
