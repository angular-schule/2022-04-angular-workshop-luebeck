import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent {

  @Output()
  create = new EventEmitter<Book>();

  bookForm = new FormGroup({
    isbn: new FormControl('', [Validators.required, Validators.minLength(3)]),
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });

  isInvalid(path: string): boolean {
    const control = this.bookForm.get(path);
    return !!control && control.touched && control.invalid;
  }

  // optionales Hands On:
  // hasError(path: string, code: string): boolean
  // --> <div *ngIf="hasError('isbn', 'minlength')">Bitte mindestens 3 Zeichen eingeben</div>

  submitForm(): void {

    const newBook = {
      ...this.bookForm.value,
      rating: 1
    }

    this.create.emit(newBook);

    this.bookForm.reset();
  }
}
