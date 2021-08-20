import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CounterComponent } from './containers/counter.component';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterButtonsComponent } from './components/counter-buttons/counter-buttons.component';
import { counterReducer } from 'src/app/store/counter/counter.reducer';
import { StoreModule } from '@ngrx/store';
import { CounterDataGuard } from './guard/counter-data.guard';
import { CounterDeactivateGuard } from './guard/counter-deactivate.guard';
import { CounterTitleResolver } from './resolver/counter-title.resolver';

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'counter',
        component: CounterComponent,
        canActivate: [CounterDataGuard],
        canDeactivate: [CounterDeactivateGuard],
        resolve: {
          title: CounterTitleResolver,
        },
        // runGuardsAndResolvers: 'always',
      },
    ]),
    StoreModule.forRoot({ counter: counterReducer }),
  ],
})
export class CounterModule {}
