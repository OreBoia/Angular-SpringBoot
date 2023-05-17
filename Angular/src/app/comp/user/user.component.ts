import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TestServiceService } from 'src/app/serv/test-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  id!: number;
  persona: any

  constructor(private route: ActivatedRoute, private serviceTest: TestServiceService){}//private testService: TestServiceService
  
  ngOnInit(): void 
  {
    this.id = +this.route.snapshot.paramMap.get('id')!
    // if(this.id)
    // {
    //   this.persona = this.serviceTest.GetPersona(this.id)
    // }
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id')!
      this.persona = this.serviceTest.GetPersona(this.id)
    })
  }

}
