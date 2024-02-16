import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { UniversityComponent } from './components/university/university.component';
=======
>>>>>>> 57332ebcb84bcae574f7aeae471b8995bdf7a7a0

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'university', component: UniversityComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class FeatRoutingModule { }
