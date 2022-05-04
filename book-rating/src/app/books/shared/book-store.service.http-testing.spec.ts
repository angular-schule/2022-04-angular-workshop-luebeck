import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BookStoreService } from './book-store.service';
import { Book } from './book';

describe('BookStoreService', () => {
  let service: BookStoreService;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(BookStoreService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an HTTP call for getAll', () => {
    const data = [{ isbn: '111', title: 'Angular' }] as Book[];

    // Antwort muss ankommen
    service.getBooks().subscribe(res => {
      expect(res).toBe(data);
    });

    // Request für bestimmte URL finden
    const req = httpCtrl.expectOne('https://api.angular.schule/books');
    req.flush(data); // Request beantworten

    // HTTP-Methode muss stimmen
    expect(req.request.method).toBe('GET');

    // es dürfen keine Requests mehr offen sein
    httpCtrl.verify();
  });
});

