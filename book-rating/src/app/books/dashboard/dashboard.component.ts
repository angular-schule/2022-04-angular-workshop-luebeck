import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  books: Book[] = [];

  constructor(private br: BookRatingService, private bs: BookStoreService) {
    this.bs.getBooks().subscribe(books => this.books = books)
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    // const ratedBook =  {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // }
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(newBook: Book) {
    this.books = this.books
      .map(b => b.isbn === newBook.isbn ? newBook : b)
      .sort((a, b) => b.rating - a.rating)
  }

  addBook(newBook: Book): void {
    this.books = [...this.books, newBook];
  }
}
