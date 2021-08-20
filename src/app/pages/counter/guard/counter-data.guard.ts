import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { ApiService } from '../../../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class CounterDataGuard implements CanActivate {
  constructor(private api: ApiService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.api.get('/todos').pipe(
      map((todos) => {
        if (todos) {
          return true;
        }
        return false;
      })
    );
  }
}
