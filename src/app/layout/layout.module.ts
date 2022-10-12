import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';




const commonToAll: any[] = [NavComponent, LogoComponent];
const importsArray: any[] = [CommonModule, RouterModule,FontAwesomeModule];
const exportsArray: any[] = [...commonToAll];
const declarationsArray: any[] = [...commonToAll];


@NgModule({
  declarations: [...declarationsArray],
  imports: [...importsArray],
  exports: [...exportsArray]
})
export class LayoutModule { }
