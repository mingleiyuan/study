import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { counterReducer } from 'src/counter/state/counter.reducer';
import { todoReducer } from 'src/todo/state/todo.reducer';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    // StoreModule.forRoot({ counter: counterReducer, todos: todoReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 5}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
