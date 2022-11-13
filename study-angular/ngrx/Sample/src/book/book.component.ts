import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from './book.service';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './state/book.selectors';
import { addBook, removeBook, retrievedBookList } from './state/book.actions';

@Component({
  selector: 'app-book',
  template: `
    <div style="display: grid; grid-template-columns: 1fr 1fr;">
      <div>
        <h3>Books</h3>
        <app-book-list [books]="books$ | async" (add)="onAdd($event)"></app-book-list>
      </div>

      <div>
        <h3>Book Collection</h3>
        <app-book-collection [books]="bookCollection$ | async" (remove)="onRemove($event)"></app-book-collection>
      </div>
    </div>
`,
  styles: [
  ]
})
export class BookComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(private bookService: GoogleBooksService, private store: Store) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe(books => {
      this.store.dispatch(retrievedBookList({books}))
    });
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({bookId}));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({bookId}));
  }
}
