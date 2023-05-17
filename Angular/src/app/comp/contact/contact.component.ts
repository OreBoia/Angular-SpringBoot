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

  isFound:boolean = false

  constructor(private serviceTest: TestServiceService, private route: ActivatedRoute)
  {

  }

  ngOnInit(): void 
  {
    // if(this.route.snapshot.paramMap.get('id'))
    // {
      // this.isProfile = true
      // this.persone = this.serviceTest.GetPersona(parseInt(this.route.snapshot.paramMap.get('id')!))
      
      // if(this.persone.length > 0){this.isFound = true}
    // }
    this.persone = this.serviceTest.GetPersone()
    // else
    // {
    //   this.isProfile = false
    //   this.persone = this.serviceTest.GetPersone()
    // }

    console.log("ID", this.route.snapshot.paramMap.get('id'))
    // console.log("isProfile", this.isProfile)
    // console.log("isFound", this.isFound)
    console.log(this.persone)
  }
}
