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

  getBook(id: any): Book
  {
    let foundBook: Book = {title: 'NO FOUND', id:'NO FOUND',plot:'NO FOUND',rating: 0}

    this.bookList.forEach((book: Book) => {book.id == id ?  foundBook = book: foundBook})

    return foundBook
  }
}

export class Book
{
  title: string = ''
  id: any = ''
  plot: string = ''
  rating: number = 0
}
