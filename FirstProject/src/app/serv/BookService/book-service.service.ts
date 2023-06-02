import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService{
  
  bookList: Book[] = [
    {title: 'Title', id: '123abc', plot: 'PLOT', rating: 5, authors: 'AUTHORS', price: 10},
    {title: 'Cosi parlo Zarathustra', id: '456efg', plot: 'Zarathustra parla un botto', rating: 8, authors: 'Nietzsche', price: 20},
    {title: 'Berserk', id: '768ghi', plot: 'guts go burserk', rating: 10, authors: 'Kentaro Miura', price: 20},]

  defaultBook: Book = {
    title: 'NO FOUND', 
    id:'NO FOUND', 
    plot:'NO FOUND', 
    rating: 0, 
    authors: 'NO FOUND', 
    price: 0};

  constructor() { }

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

  getBookByTitle(title: any): Book 
  {
    const notFoundBook: Book = this.defaultBook;
    let foundBook: Book = notFoundBook;
  
    for (const book of this.bookList) 
    {
      if (book.title == title) 
      {
        foundBook = book;
        break;
      }
    }
  
    return foundBook;
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
