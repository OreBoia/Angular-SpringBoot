import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService{
  
  bookList: Book[] = [
    {title: 'Title', id: '123abc', plot: 'PLOT', rating: 5},
    {title: 'Cosi parlo Zarathustra', id: '456efg', plot: 'Zarathustra parla un botto', rating: 8}]

  constructor() { }

  getBooks(): Book[] 
  {
    return this.bookList 
  }

  getBookById(id: any): Book 
  {
    const notFoundBook: Book = {title: 'NOT FOUND', id: 'NOT FOUND', plot: 'NOT FOUND', rating: 0};
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
    const notFoundBook: Book = {title: 'NOT FOUND', id: 'NOT FOUND', plot: 'NOT FOUND', rating: 0};
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
}
