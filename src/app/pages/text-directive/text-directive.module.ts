import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextDirectiveComponent } from './containers/text-directive/text-directive.component';

@NgModule({
  declarations: [TextDirectiveComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'text-directive', component: TextDirectiveComponent },
    ]),
  ],
})
export class TextDirectiveModule {}
