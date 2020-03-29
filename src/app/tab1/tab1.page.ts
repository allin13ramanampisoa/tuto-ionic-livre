import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from '../models/book';
import {Subscription} from 'rxjs';
import {BookService} from '../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit, OnDestroy{

  books: Book[];
  booksSubscription: Subscription;

  constructor(
      private booksService: BookService,
      private router: Router
  ) {}

  ngOnInit() {
    this.booksSubscription = this.booksService.booksSubject.subscribe(
        (books: Book[]) => {
          this.books = books;
        }
    );
    this.booksService.emitBooks();
  }

  ngOnDestroy(): void {
    this.booksSubscription.unsubscribe();
  }

}
