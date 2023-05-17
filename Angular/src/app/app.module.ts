import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms'

import { MatSliderModule } from '@angular/material/slider'
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { HighlightDirective } from './dir/highlight/highlight.directive';
import { TestServiceService } from './serv/test-service.service';
import { AboutComponent } from './comp/about/about.component';
import { ContactComponent } from './comp/contact/contact.component';
import { HomeComponent } from './comp/home/home.component';
import { UserComponent } from './comp/user/user.component';
import { NotfoundComponent } from './comp/notfound/notfound.component';


@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    HighlightDirective,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    UserComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers:[TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
