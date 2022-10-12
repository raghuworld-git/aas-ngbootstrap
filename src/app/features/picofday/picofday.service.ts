import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { CustomHttpService } from "@core/services/customHttp.service";
import { APOD } from "@models/apod/apod.model";
import { environment } from '@environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PicOfDayService {

  constructor(private _httpService: CustomHttpService) { }

  private nasaBaseURL: string = "NASA";
  private picofdayAction: string = `${this.nasaBaseURL}/GetAPOD`;


  getAPOD(date: string | null | undefined): Observable<APOD> {
    let params: { name: string, value: string }[] = [];
    if (date != null) {
      params.push({ name: 'date', value: date });
    }
    return this._httpService.get<APOD>(this.picofdayAction, params);
  }


  getMinDateOfAPODRepo(): { year: number, month: number, day: number } {
    let date = new Date(environment.apodStartDate);
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
  }

  appendZero(num: number): string {
    if (num.toString().length == 1) {
      return `0${num.toString()}`;
    }
    return num.toString();
  }
}
