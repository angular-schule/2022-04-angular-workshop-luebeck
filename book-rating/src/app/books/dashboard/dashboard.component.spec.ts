import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookComponent } from '../book/book.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

import { DashboardComponent } from './dashboard.component';

// @Component({
//   selector: 'br-book',
//   template: 'HEy!!',
// })
// export class BookComponentStub {
//   @Input()
//   book?: Book;
// }

// ALTERNATIVE: https://github.com/ngneat/spectator#mocking-components

describe(DashboardComponent.name, () => {
  describe('doRateUp()', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let bookRatingMock: jasmine.SpyObj<BookRatingService>;

    beforeEach(async () => {

      bookRatingMock = jasmine.createSpyObj(BookRatingService.name, ['rateUp']);

      await TestBed.configureTestingModule({
        declarations: [
          DashboardComponent,
          BookComponent // Integration-Test
          // BookComponentStub
        ],
        providers: [
          {
            provide: BookRatingService,
            useValue: bookRatingMock
          }
        ]
      })
      .compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(DashboardComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should forward all calls to BookRating service', () => {

      const testBook = { } as Book
      bookRatingMock.rateUp.and.returnValue(testBook);
      component.doRateUp(testBook)

      expect(bookRatingMock.rateUp).toHaveBeenCalledOnceWith(testBook);
    });
  });
});
