import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvaComponent } from './prova/prova.component';
import { AboutComponent } from './comp/about/about.component';
import { ContactComponent } from './comp/contact/contact.component';
import { HomeComponent } from './comp/home/home.component';
import { UserComponent } from './comp/user/user.component';
import { NotfoundComponent } from './comp/notfound/notfound.component';
import { AuthGuard } from './serv/auth/auth.guard';

const routes: Routes = 
[
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/homepage'
  },
  {
    path: 'homepage',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent, 
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {path: ':id', component: UserComponent}
    ]
  },
  {
    path: "404", component: NotfoundComponent
  },
  {
    path: '**', redirectTo: '/404' //qualsiasi cosa prende come redirect (mettere sempre per ultimo)
  }
  // {
  //   path: 'contact/:id',
  //   component: ContactComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
