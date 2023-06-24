import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';
import { FirebaseService, Item } from 'src/app/serv/firebase/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  // @ViewChild('homeform') homeform!: NgForm

  @Input() name: string = ''

  obs!: Observable<any>
  subs!: Subscription;

  homeform!: FormGroup

  persone!: any[]

  constructor(private firebase: FirebaseService){}

  ngOnInit(): void 
  {
    //OBSERVER
    // this.obs = new Observable((observer) => {
    //   let count = 0
    //   setInterval(() => {
    //     observer.next(count)
    //     count++
    //   }, 1000)
    // })

    // this.subs = this.obs.subscribe(numero => {
    //   console.log(numero)
    // })

   this.homeform = new FormGroup({
      nome: new FormControl('luca', Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      colore: new FormControl()
   })

  //  this.firebase.insertPersona('https://angular-419c7-default-rtdb.europe-west1.firebasedatabase.app/persone.json', 
  //                               {nome: 'luca', email: 'luca@email.com'}).subscribe(data => {
  //                                 console.log(data)
  //                               })
  }

  onSubmit() 
  {
    // console.log(form)
    console.log(this.homeform.get('nome')?.value)

    this.firebase.insertPersona('https://angular-419c7-default-rtdb.europe-west1.firebasedatabase.app/persone.json', 
                                {nome: this.homeform.get('nome')?.value, email: this.homeform.get('email')?.value}).subscribe(data => {
                                  console.log(data)
                                })
    // this.firebase.getPersona('https://angular-419c7-default-rtdb.europe-west1.firebasedatabase.app/persone.json', 'luca').subscribe(
    //   (data: any) => 
    //   {
    //       this.persone = Object.keys(data).map((key) => {return data[key]})
    //       console.log(this.persone[0].email)
    //   })

  }

  ngOnDestroy(): void 
  {
    // this.subscription.unsubscribe()

    this.subs.unsubscribe()
  }
}
