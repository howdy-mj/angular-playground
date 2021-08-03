import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from './counter/counter-buttons/counter-buttons.component';

import { BlueTextDirective } from './shared/blue-text.directive';
import { counterReducer } from './counter/state/counter.reducer';
import { PipeComponent } from './components/pipe/pipe.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle/life-cycle.component';
import { LifeCycleActionsComponent } from './components/life-cycle/life-cycle-actions/life-cycle-actions.component';
import { LifeCycleOutputComponent } from './components/life-cycle/life-cycle-output/life-cycle-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,

    BlueTextDirective,

    PipeComponent,
     LifeCycleComponent,
     LifeCycleActionsComponent,
     LifeCycleOutputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
