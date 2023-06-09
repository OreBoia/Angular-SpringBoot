import { LocationStrategy } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book, BookServiceService } from 'src/app/serv/BookService/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges, OnDestroy{

  bookList!: Book[]

  titleToSearch: string = ''

  selectedBooks: Book[] = []
  
  @Output() selectedBooksEmitter = new EventEmitter<Book[]>();
  @Input() selectedBooksInput: Book[] = []

  totalPrice: number = 0;

  private subscription!: Subscription;

  currentUrl: string = '';
  showFiller: boolean = false;
  showThirdColumn: boolean = false;
  
  constructor(private bookService: BookServiceService, 
              private route: ActivatedRoute,
              private router: Router,
              private location: LocationStrategy){}
  
  foundBook: Book = this.bookService.defaultBook;

  ngOnInit(): void 
  {
    this.currentUrl = this.router.url;//this.location.path()

    console.log(this.currentUrl);

    this.bookList = this.bookService.getBooks()

    this.subscription = this.bookService.totalPriceChanged.subscribe(
      (newTotalPrice: number) => {
        this.totalPrice = newTotalPrice;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {}

  onClick()
  {
    this.foundBook = this.bookService.getBookByTitle(this.titleToSearch)

    this.router.navigate(['/booklist', this.foundBook.id])
  }      

  updateTotalPrice(book : Book, event: boolean) 
  {
    this.bookService.updateCartList(book, event)
  }

  ngOnDestroy(): void 
  {
    this.subscription.unsubscribe()
  }
}
