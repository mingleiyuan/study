import { createReducer, on } from '@ngrx/store';

import * as BookAction from './book.actions';
import { Book } from '../book.model';


const initialState: Book[] = [];

export const booksReducer = createReducer(
    initialState,
 
    on(BookAction.retrievedBookList, (state, {books}) => (books)),
);
