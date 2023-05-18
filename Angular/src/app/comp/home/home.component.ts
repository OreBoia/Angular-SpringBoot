import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{


  subscription: any;

  constructor(){}

  ngOnInit(): void 
  {
    // this.subscription = new Observable((observer) => {
    //   let count = 0
    //   setInterval(() => {
    //     observer.next(count)
    //     count++
    //   }, 1000)
    // }).subscribe(numero => {
    //   console.log(numero)
    // })
  }

  onSubmit(form: NgForm) 
  {
    console.log(form)
  }

  ngOnDestroy(): void 
  {
    // this.subscription.unsubscribe()
  }
}
