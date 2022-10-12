import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpService } from './services/customHttp.service';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { HttpRequestInterceptor } from './interceptor/httpRequest.interceptor';



@NgModule({
  declarations: [
    PageLoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    PageLoaderComponent
  ],
  providers: [
    CustomHttpService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error("You should import core module only in the root module")
    }
  }
}
