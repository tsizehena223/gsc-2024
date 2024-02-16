import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componnents/login/login.component';
import { HomeComponent } from './componnents/home/home.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
 
  exports: [RouterModule]
})
export class FeatRoutingModule { }
