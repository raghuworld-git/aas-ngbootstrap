import { Component, OnInit } from '@angular/core';
import { LoadingService } from '@core/services/loading.service';
import { delay } from 'rxjs';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {

  constructor(private _loading: LoadingService) { }

  loading: boolean = false;

  ngOnInit() {
    this.listenToLoading();
  }

  /**
  * Listen to the loadingSub property in the LoadingService class. This drives the
  * display of the loading spinner.
  */
  listenToLoading(): void {
    this._loading.loadingSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

}
