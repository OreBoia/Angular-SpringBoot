import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  onClick(e: any){console.log(e)}
  onInput(event: Event){console.log((<HTMLInputElement>event.target).value)}
}
