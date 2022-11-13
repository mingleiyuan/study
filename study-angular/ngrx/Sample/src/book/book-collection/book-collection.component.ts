import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-collection',
  template: `
    <div *ngFor="let book of books">
      <p style="display: inline-block; margin-right: 1rem">Title:{{book.volumeInfo.title}}  Author:{{book.volumeInfo.authors}}</p>
      <button (click)="remove.emit(book.id)">
        Remove from Collection
      </button>
</div>
  `,
  styles: [
  ]
})
export class BookCollectionComponent {
  @Input() books: Book[] | null = [];
  @Output() remove = new EventEmitter<string>();
}
