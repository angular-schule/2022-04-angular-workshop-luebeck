import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeAll } from 'rxjs';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookDetailsComponent {

  book$ = this.route.paramMap.pipe(
    map(x => x.get('isbn')),
    map(isbn => this.bs.getSingleBook(isbn!)),
    mergeAll()
  );

  constructor(private route: ActivatedRoute, private bs: BookStoreService) {
  }
}
