import { decrement, increment, reset } from './counter.action';
import { createReducer, on } from '@ngrx/store';

export interface CounterState {
  counter: number;
}

export const initialState: CounterState = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(decrement, (state) => {
    return { ...state, counter: state.counter - 1 };
  }),
  on(reset, (state) => {
    return { ...state, counter: 0 };
  })
);
