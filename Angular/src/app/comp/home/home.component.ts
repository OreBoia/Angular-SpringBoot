import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  subscription: any;

  obs!: Observable<any>
  subs!: Subscription;

  constructor(){}

  ngOnInit(): void 
  {
    this.obs = new Observable((observer) => {
      let count = 0
      setInterval(() => {
        observer.next(count)
        count++
      }, 1000)
    })

    this.subs = this.obs.subscribe(numero => {
      console.log(numero)
    })
  }

  onSubmit(form: NgForm) 
  {
    console.log(form)
  }

  ngOnDestroy(): void 
  {
    this.subscription.unsubscribe()

    this.subs.unsubscribe()
  }
}
