import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { NavigatorComponent } from './component/navigator/navigator.component';
import { BlueTextDirective } from './directive/blue-text.directive';

const COMPONENTS = [NavigatorComponent];

const DIRECTIVE = [BlueTextDirective];

@NgModule({
  imports: [CommonModule, AppRoutingModule],
  declarations: [...COMPONENTS, ...DIRECTIVE],
  exports: [...COMPONENTS, ...DIRECTIVE],
})
export class SharedModule {}
