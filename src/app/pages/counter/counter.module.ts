import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './containers/counter.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { counterReducer } from 'src/app/store/counter/counter.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: 'counter', component: CounterComponent }]),
    StoreModule.forRoot({ counter: counterReducer }),
  ],
})
export class CounterModule {}
