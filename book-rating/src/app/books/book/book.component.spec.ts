import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from '../shared/book';

import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // WORST CASE, FAKE TESTS
  it('should work as expected', () => {
    // should not throw an exception!!!
    component.book = {} as Book;
    component.doRateDown();
    component.doRateUp();
    expect(component).toBeTruthy();
  });
});
