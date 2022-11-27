import { Injectable } from "@angular/core";
import { CustomHttpService } from "@core/services/customHttp.service";
import { dashboard } from "@models/dashboard/dashboard.model";
import { Observable } from "rxjs";

@Injectable()
export class DashboardService {

  constructor(private _httpService: CustomHttpService) { }

  private dashbardDataAction: string = "Dashboard/GetAllDashboardData";

  getAllDashboardData(): Observable<dashboard> {
    return this._httpService.get<dashboard>(this.dashbardDataAction);
  }
}
