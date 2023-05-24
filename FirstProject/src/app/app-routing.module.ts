import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookListComponent } from './comp/book-list/book-list.component';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './comp/notfound/notfound.component';
import { BookDetailComponent } from './comp/book-detail/book-detail.component';

const routes: Routes = 
[
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'booklist',
    component: BookListComponent,
    children: [
      {path: ':id', component: BookDetailComponent}
    ]
  },
  // {
  //   path: "404", component: NotfoundComponent
  // },
  // {
  //   path: '**', redirectTo: '/404' //qualsiasi cosa prende come redirect (mettere sempre per ultimo)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
