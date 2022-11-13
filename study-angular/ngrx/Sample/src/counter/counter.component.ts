import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { CounterState } from './state/counter.reducer';
import * as Actions from './state/counter.actions';

@Component({
  selector: 'app-counter',
  template: `
    <div style="display: flex; gap: 1rem; align-items: center;">
      <h3>{{count$ | async | json}}</h3>
      <button (click)="increment()">Increment</button>
      <button (click)="decrement()">Decrement</button>
      <button (click)="reset()">Reset</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  count$: Observable<number> = this.store.select((state) => state.counter.count);

  constructor(public store: Store<{counter: CounterState}>) { }

  increment() { this.store.dispatch(Actions.increment())};

  decrement() { this.store.dispatch(Actions.decrement())};

  reset() { this.store.dispatch(Actions.reset())};
}
