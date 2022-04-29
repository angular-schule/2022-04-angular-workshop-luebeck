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


fdescribe('DashboardComponent', () => {
  describe('doRateUp()', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let bookRatingMock: BookRatingService;

    beforeEach(async () => {

      bookRatingMock = {
        rateUp: (b: Book) => b,
        // rateDown: (b: Book) => b // nicht benötigt
      } as BookRatingService;

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

      // const rs = TestBed.inject(BookRatingService);
      spyOn(bookRatingMock, 'rateUp').and.callThrough();
      const testBook = { } as Book
      component.doRateUp(testBook)

      expect(bookRatingMock.rateUp).toHaveBeenCalledOnceWith(testBook);
    });
  });
});
