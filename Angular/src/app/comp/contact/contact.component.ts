import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestServiceService } from 'src/app/serv/test-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit
{
  persone: any

  isProfile:boolean = false

  constructor(private serviceTest: TestServiceService, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void 
  {
    this.persone = this.serviceTest.GetPersone()

    this.isProfile = !this.route.snapshot.paramMap.get('id') ? false : true

    console.log(this.isProfile) 
    console.log(this.route.snapshot.paramMap.get('id')) 
  }
}
