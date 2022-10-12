import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicofdayRoutingModule } from './picofday-routing.module';
import { PicOfTheDayComponent } from './components/pic-of-the-day/pic-of-the-day.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PicOfTheDayComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    FontAwesomeModule,
    PicofdayRoutingModule,
    SharedModule
  ]
})
export class PicofdayModule { }
