import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CounterComponent } from '../containers/counter.component';

@Injectable({
  providedIn: 'root',
})
export class CounterDeactivateGuard implements CanDeactivate<CounterComponent> {
  canDeactivate(
    component: CounterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (nextState.url === '/text-directive') {
      return false;
    }
    return true;
  }
}
