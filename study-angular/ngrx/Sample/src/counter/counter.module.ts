import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { counterFeatureKey, counterReducer } from './state/counter.reducer';

@NgModule({
  declarations: [
    CounterComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule,
    StoreModule.forFeature(counterFeatureKey, counterReducer)
  ]
})
export class CounterModule { }

