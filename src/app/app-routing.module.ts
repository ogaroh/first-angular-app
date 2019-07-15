import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// home component and contact component
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
