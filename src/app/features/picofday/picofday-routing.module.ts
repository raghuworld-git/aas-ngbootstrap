import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PicOfTheDayComponent } from './components/pic-of-the-day/pic-of-the-day.component';

const routes: Routes = [
  { path: '', component: PicOfTheDayComponent },
  { path: ':date', component: PicOfTheDayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PicofdayRoutingModule { }
