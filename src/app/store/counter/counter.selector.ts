import { createFeatureSelector, createSelector } from '@ngrx/store';

import { CounterState } from './counter.reducer';

const selectCounterState = createFeatureSelector<CounterState>('counter');

export const counterState = createSelector(
  selectCounterState,
  ({ counter }) => counter
);
