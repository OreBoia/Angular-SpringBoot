import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book, BookServiceService } from 'src/app/serv/BookService/book-service.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

  book!: Book;
  recivedBook!: Book;

  constructor(private bookService: BookServiceService, private route: ActivatedRoute){}

  ngOnInit(): void 
  {
    this.route.paramMap.subscribe((params: ParamMap) => {

      const bookId = params.get('id');

      this.book = this.bookService.getBookById(bookId);

    });
  }

  addBookToCart(book: Book)
  {
    const existingBook = this.bookService.booksInCart.find(b => b.id === book.id);

    // If the book doesn't exist, add it to the cart
    if (!existingBook) 
    {
      this.bookService.booksInCart.push(book);
      console.log("Added book to cart");
    }
    else
    {
      console.log("Book already in cart");
    }
  }
}