import { createReducer, on } from '@ngrx/store';

import * as BookAction from './book.actions';import { Book } from '../book.model';

const initialState: string[] = [];

export const collectionReducer = createReducer(
    initialState,
 
    on(BookAction.addBook, (state, {bookId}) => state.indexOf(bookId) === -1 ? [...state, bookId] : state),

    on(BookAction.removeBook, (state, {bookId}) => state.filter(id => id !== bookId))
    
);
