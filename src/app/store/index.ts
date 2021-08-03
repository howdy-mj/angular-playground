import { createFeatureSelector } from '@ngrx/store';

import * as fromCounter from './counter/counter.reducer';

export interface ProductState {
  counter: fromCounter.CounterState;
}

export const reducers = {
  counter: fromCounter.counterReducer,
};

export const selectProductState =
  createFeatureSelector<ProductState>('product');
