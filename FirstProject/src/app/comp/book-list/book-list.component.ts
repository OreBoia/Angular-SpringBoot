import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Event, Router } from '@angular/router';
import { Book, BookServiceService } from 'src/app/serv/BookService/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnChanges{

  bookList!: Book[]

  titleToSearch: string = ''

  selectedBooks: Book[] = []
  
  @Output() selectedBooksEmitter = new EventEmitter<Book[]>();
  @Input() selectedBooksInput: Book[] = []


  totalPrice: number = 0;

  constructor(private bookService: BookServiceService, 
              private route: ActivatedRoute,
              private router: Router){}
  
    
  foundBook: Book = this.bookService.defaultBook;

  ngOnInit(): void 
  {
    this.bookList = this.bookService.getBooks()
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    
  }

  onClick()
  {
    this.foundBook = this.bookService.getBookByTitle(this.titleToSearch)

    this.router.navigate(['/booklist', this.foundBook.id])
  }      

  updateTotalPrice(book : Book, event: boolean) {
    
    if(event)
    {
      this.totalPrice += book.price;
      this.bookService.booksInCart.push(book)
    }
    else
    {
      this.totalPrice -= book.price;
      this.bookService.booksInCart.splice(this.bookService.booksInCart.indexOf(book), 1)
    }

    console.log(this.bookService.booksInCart)
    console.log(this.selectedBooks)
  }

  //emit event to parent component
  emitSelectedBooks(): void {
    this.selectedBooksEmitter.emit(this.selectedBooks);
  }
}
