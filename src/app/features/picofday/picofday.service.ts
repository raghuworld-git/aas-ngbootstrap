import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CustomHttpService } from '@core/services/customHttp.service';
import { APOD } from '@models/apod/apod.model';
import { environment } from '@environment/environment';
import {
  NgbDate,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root',
})
export class PicOfDayService {
  constructor(
    private _httpService: CustomHttpService
  ) {}

  private nasaBaseURL: string = 'NASA';
  private picofdayAction: string = `${this.nasaBaseURL}/GetAPOD`;

  getAPOD(date: string | null | undefined): Observable<APOD> {
    let params: { name: string; value: string }[] = [];

    if (date != null || date != undefined) {
      // To check if passed date is valid.
      if (!isNaN(Date.parse(date))) {
        params.push({ name: 'date', value: date });
      }
    }
    return this._httpService.get<APOD>(this.picofdayAction, params);
  }

  getMinDateOfAPODRepo(): NgbDateStruct {
    let date = new Date(environment.apodStartDate);
    return {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
    };
  }

  isDateWithinValidRange(selectedDate: NgbDate, comparebleDate: NgbDate): boolean {
    if (
      (selectedDate.before(comparebleDate) || selectedDate.equals(comparebleDate)) &&
      (selectedDate.after(this.getMinDateOfAPODRepo()) ||
        selectedDate.equals(this.getMinDateOfAPODRepo()))
    ) {
      return true;
    } else {
      return false;
    }
  }

  getFormattedDateWithProperZerosByNgbDate(dateStruct: NgbDate): string {
    return `${dateStruct.year}-${this.appendZero(
      dateStruct.month
    )}-${this.appendZero(dateStruct.day)}`;
  }

  private appendZero(num: number): string {
    if (num.toString().length == 1) {
      return `0${num.toString()}`;
    }
    return num.toString();
  }
}
