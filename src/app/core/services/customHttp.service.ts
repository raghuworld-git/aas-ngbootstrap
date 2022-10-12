import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { environment } from "@environment/environment";

// Reference site for  generic request service
//https://nichola.dev/generic-approach-to-consume-rest-api/

@Injectable()
export class CustomHttpService {

  constructor(private _httpClient: HttpClient) { }


  private readonly APIUrl = environment.apiURL;

  get<T>(action: string, params: { name: string, value: string }[] = []): Observable<T> {
    let paramsString = "";
    params.forEach((item, index) => {
      if (index === 0) {
        paramsString = `?${item.name}=${item.value}`;
      } else {
        paramsString += `&${item.name}=${item.value}`
      }
    });
    return this._httpClient.get<T>(`${this.APIUrl}/${action}/${paramsString}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => console.log(error));
  }

}
