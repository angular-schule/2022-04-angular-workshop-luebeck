import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(private bs: BookRatingService) {
    // setTimeout(() => this.books = [], 3000);
  }

  books: Book[] = [{
    isbn: '000',
    title: 'Angular',
    description: 'Tolles Buch',
    rating: 5
  }, {
    isbn: '111',
    title: 'AngularJS',
    description: 'Altes Buch',
    rating: 3
  }, {
    isbn: '222',
    title: 'jQUery',
    description: 'Oh nöööö!',
    rating: 1
  }];

  doRateUp(book: Book): void {
    const ratedBook = this.bs.rateUp(book);
    // const ratedBook =  {
    //   ...book,
    //   rating: book.rating < 5 ? book.rating + 1 : 5
    // }
    this.updateAndSort(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.bs.rateDown(book);
    this.updateAndSort(ratedBook);
  }

  updateAndSort(newBook: Book) {
    this.books = this.books
      .map(b => b.isbn === newBook.isbn ? newBook : b)
      .sort((a, b) => b.rating - a.rating)
  }
}
