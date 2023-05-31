import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book, BookServiceService } from 'src/app/serv/BookService/book-service.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

  id!: any;
  book!: Book;

  constructor(private bookService: BookServiceService, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void 
  {  
    this.route.paramMap.subscribe((params: ParamMap) => 
    {

      this.id = params.get('id')!

      this.book = this.bookService.getBookById(this.id)

      console.log(this.book)
      
    })
  }
}
