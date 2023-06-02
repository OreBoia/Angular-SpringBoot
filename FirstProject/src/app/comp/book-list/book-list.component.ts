import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book, BookServiceService } from 'src/app/serv/BookService/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  bookList!: Book[]

  titleToSearch: string = ''

  selectedBooks: Book[] = []

  constructor(private bookService: BookServiceService, 
              private route: ActivatedRoute,
              private router: Router){}
    
  foundBook: Book = this.bookService.defaultBook;

  ngOnInit(): void 
  {
    this.bookList = this.bookService.getBooks()
  }

  onClick()
  {
    this.foundBook = this.bookService.getBookByTitle(this.titleToSearch)

    this.router.navigate(['/booklist', this.foundBook.id])
  }      
}
