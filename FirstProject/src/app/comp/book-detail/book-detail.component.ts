import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Book, BookServiceService } from 'src/app/serv/BookService/book-service.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit{

  id!: number;
  book!: Book;

  constructor(private bookService: BookServiceService, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void 
  {
    
    this.id = +this.route.snapshot.paramMap.get('id')!

    console.log('ID' + this.id)

    this.route.paramMap.subscribe((params: ParamMap) => 
    {

      this.id = +params.get('id')!

      this.book = this.bookService.getBook(this.id)
      
    })
  }
}
