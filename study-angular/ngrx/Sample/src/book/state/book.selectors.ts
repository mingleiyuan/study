import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../book.model';

export const selectBooks = createFeatureSelector<Book[]>('books');

export const selectCollectionState = createFeatureSelector<string[]>('collection');

export const selectBookCollection= createSelector(selectBooks, selectCollectionState, (books, collection) =>
    collection.map( id => books.find( book => book.id === id)!)
);
