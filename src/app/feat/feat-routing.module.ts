import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UniversityComponent } from './components/university/university.component';
import { AccueilComponent } from './components/accueil/accueil.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'university', component: UniversityComponent },
  { path: '', component: AccueilComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class FeatRoutingModule { }
