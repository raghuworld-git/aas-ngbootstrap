import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapList } from '@ng-icons/bootstrap-icons';
import { RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { LogoComponent } from './components/logo/logo.component';






const commonToAll: any[] = [NavComponent, LogoComponent];
const importsArray: any[] = [CommonModule, RouterModule, NgIconsModule.withIcons({ bootstrapList })];
const exportsArray: any[] = [...commonToAll];
const declarationsArray: any[] = [...commonToAll];


@NgModule({
  declarations: [...declarationsArray],
  imports: [...importsArray],
  exports: [...exportsArray]
})
export class LayoutModule { }
