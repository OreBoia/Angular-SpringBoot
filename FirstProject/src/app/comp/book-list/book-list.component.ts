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
  
  constructor(private bookService: BookServiceService, 
              private route: ActivatedRoute,
              private router: Router){}
  
  foundBook: Book = this.bookService.defaultBook;

  ngOnInit(): void 
  {
    this.bookList = this.bookService.getBooks()

    this.subscription = this.bookService.totalPriceChanged.subscribe(
      (newTotalPrice: number) => {
        this.totalPrice = newTotalPrice;
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    
  }

  ngOnDestroy(): void 
  {
    this.subscription.unsubscribe()
  }
  

  onClick()
  {
    this.foundBook = this.bookService.getBookByTitle(this.titleToSearch)

    this.router.navigate(['/booklist', this.foundBook.id])
  }      

  updateTotalPrice(book : Book, event: boolean) {
    
    this.bookService.updateCartList(book, event)

    // this.totalPrice = this.bookService.totalPrice
   
  }

}
