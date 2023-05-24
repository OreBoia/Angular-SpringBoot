import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book, BookServiceService } from 'src/app/serv/BookService/book-service.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{

  bookList!: Book[]

  titleToSearch: string = ''

  foundBook: Book = {title: 'NO FOUND', id:'NO FOUND',plot:'NO FOUND',rating: 0}


  constructor(private bookService: BookServiceService, private route: ActivatedRoute){}
 
  ngOnInit(): void 
  {
    this.bookList = this.bookService.getBooks()
  }

  onClick()
  {

    this.bookList.forEach((book: Book) => {book.title == this.titleToSearch ?  this.foundBook = book: this.foundBook})
  
  }

}
