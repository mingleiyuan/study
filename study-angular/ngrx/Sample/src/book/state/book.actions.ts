import { createAction, props } from  '@ngrx/store';

import { Book } from '../book.model';


export const addBook = createAction('[Book List] add book', props<{bookId: string}>());

export const removeBook = createAction('[Book Collection] remove book', props<{bookId: string}>());

export const  retrievedBookList = createAction('[Book List/API] retrieve books success', props<{books: Book[]}>());


