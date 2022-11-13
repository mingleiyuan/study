import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-list',
  template: `
    <div *ngFor="let book of books">
      <p style="display: inline-block; margin-right: 1rem">Title:{{book.volumeInfo.title}} Authors:{{book.volumeInfo.authors}}</p> <button (click)="add.emit(book.id)">Add</button>
    </div>
  `,
  styles: [
  ]
})
export class BookListComponent {
  @Input() books: Book[] | null = [];
  @Output() add = new EventEmitter<string>();
}