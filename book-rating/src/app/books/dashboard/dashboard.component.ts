import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor() {
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

  }

  doRateDown(book: Book): void {

  }
}
