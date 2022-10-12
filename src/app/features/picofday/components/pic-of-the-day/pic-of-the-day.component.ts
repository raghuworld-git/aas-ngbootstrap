import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDateStruct, NgbInputDatepicker } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { faCalendar, faCopyright, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { APOD } from '@models/apod/apod.model';
import { PicOfDayService } from '@features/picofday/picofday.service';


@Component({
  selector: 'app-pic-of-the-day',
  templateUrl: './pic-of-the-day.component.html',
  styleUrls: ['./pic-of-the-day.component.scss']
})
export class PicOfTheDayComponent implements OnInit, OnDestroy {

  constructor(private _podService: PicOfDayService, private calendar: NgbCalendar) { }

  private podSubscribe: Subscription | null = null;

  faCalendar = faCalendar;
  faCopyright = faCopyright;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  today = this.calendar.getToday();
  model: NgbDateStruct = this.today;
  isLoading: boolean = false;

  apodStartdate: { year: number, month: number, day: number };
  apodResult: APOD | null = null;

  ngOnInit(): void {
    this.apodStartdate = this._podService.getMinDateOfAPODRepo();
    this.getAPODData(null);
  }

  getAPODData(date: string | null) {
    this.isLoading = true;
    this.apodResult = null;
    this.podSubscribe = this._podService.getAPOD(date).subscribe(
      {
        next: (data) => {
          this.apodResult = data;
        },
        complete: () => this.isLoading = false
      }
    );
  }

  onDateClickBack() {

  }

  onDateClickNext() {

  }

  onDateSelect(event: NgbDate) {
    this.getAPODData(`${event.year}-${this._podService.appendZero(event.month)}-${this._podService.appendZero(event.day)}`);
  }

  ngOnDestroy(): void {
    this.podSubscribe?.unsubscribe();
  }

}
