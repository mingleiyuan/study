import { createReducer, on } from '@ngrx/store';

import * as Actions from './counter.actions';

export interface CounterState {
    count: number;
}


const initialState: CounterState = {
    count: 5
}

export const counterReducer = createReducer(
    initialState,
    on(Actions.increment, (state) => ({ count: state.count + 1})),
    on(Actions.decrement, (state) => ({ count: state.count - 1})),
    on(Actions.reset, (state) => (initialState)),
);

export const counterFeatureKey = 'counter';