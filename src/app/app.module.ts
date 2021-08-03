import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CounterModule } from './pages/counter/counter.module';
import { TextDirectiveModule } from './pages/text-directive/text-directive.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { environment } from 'src/environments/environment';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      name: 'angular-rxjs',
      logOnly: environment.production,
    }),
    CounterModule,
    TextDirectiveModule,
    HomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
