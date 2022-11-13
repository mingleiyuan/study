import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';

import { BookRoutingModule } from './book-routing.module';
import { BookComponent } from './book.component';
import { booksReducer } from './state/book.reducer';
import { collectionReducer } from './state/collection.reducer';
import { BookListComponent } from './book-list/book-list.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';


@NgModule({
  declarations: [
    BookComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    StoreModule.forFeature('books', booksReducer),
    StoreModule.forFeature('collection', collectionReducer)
  ]
})
export class BookModule { }
