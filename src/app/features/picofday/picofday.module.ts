import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCalendar2EventFill, bootstrapArrowLeft, bootstrapArrowRight, bootstrapCCircle } from '@ng-icons/bootstrap-icons';

import { PicofdayRoutingModule } from './picofday-routing.module';
import { PicOfTheDayComponent } from './components/pic-of-the-day/pic-of-the-day.component';
import { SharedModule } from '@shared/shared.module';
import { PicOfDayService } from './picofday.service';




@NgModule({
  declarations: [PicOfTheDayComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDatepickerModule,
    NgIconsModule.withIcons({ bootstrapCalendar2EventFill, bootstrapArrowLeft, bootstrapArrowRight, bootstrapCCircle }),
    PicofdayRoutingModule,
    SharedModule
  ],
  providers:[PicOfDayService]
})
export class PicofdayModule { }
