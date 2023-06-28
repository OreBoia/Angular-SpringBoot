import { EventEmitter, Injectable, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService implements OnChanges{
  
  bookList: Book[] = 
  [
    {
      title: 'Title', 
      id: '123abc', 
      plot: 'PLOT',
      rating: 5, 
      authors: 'AUTHORS', 
      price: 10
    },
    {
      title: 'Cosi parlo Zarathustra', 
      id: '456efg', 
      plot: 'Zarathustra parla un botto', 
      rating: 8, 
      authors: 'Nietzsche', 
      price: 20
    },
    {
      title: 'Berserk', 
      id: '768ghi', 
      plot: 'guts go burserk', 
      rating: 10, 
      authors: 'Kentaro Miura', 
      price: 20
    }
  ]

  defaultBook: Book = 
  {
    title: 'NOT FOUND', 
    id:'NOT FOUND', 
    plot:'NOT FOUND', 
    rating: 0, 
    authors: 'NOT FOUND', 
    price: 0
  };
  
  booksInCart: Book[] = [];
  totalPrice: number = 0;

  totalPriceChanged = new Subject<number>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void { }

  getBooks(): Book[] 
  {
    return this.bookList 
  }

  getBookById(id: any): Book 
  {
    const notFoundBook: Book = this.defaultBook;
    let foundBook: Book = notFoundBook;
  
    for (const book of this.bookList) 
    {
      if (book.id == id) 
      {
        foundBook = book;
        break;
      }
    }
  
    return foundBook;
  }

/**
 * Get a book by its title.
 * @param title - The title of the book.
 * @returns The book with the matching title, or a default book if not found.
 */
getBookByTitle(title: string): Book 
{
  // Define a default book to be returned if no book is found
  const notFoundBook: Book = this.defaultBook;

  // Initialize foundBook with the default book
  let foundBook: Book = notFoundBook;

  // Filter the book list based on the title
  let filteredBooks: Book[] = this.bookList.filter(book => book.title.includes(title));

  // Print the number of books found
  console.log("foundBook ", filteredBooks.length);

  // Return the first book found, or the default book if no book is found
  return filteredBooks.length > 0 ? filteredBooks[0] : notFoundBook;
}

  updateCartList(book: Book, event: boolean): void
  {
    if(event)
    {
      this.totalPrice += book.price;
      this.booksInCart.push(book)
    }
    else
    {
      this.totalPrice -= book.price;
      this.booksInCart.splice(this.booksInCart.indexOf(book), 1)
    }

    console.log(this.booksInCart)
    console.log(this.totalPrice)
    this.setTotalPrice(this.totalPrice);
  }
  
  setTotalPrice(newTotalPrice: number) 
  {
    this.totalPrice = newTotalPrice;
    this.totalPriceChanged.next(this.totalPrice);
  }
}

export class Book
{
  title: string = ''
  id: any = ''
  plot: string = ''
  rating: number = 0
  authors: string = ''
  price: number = 0
}
