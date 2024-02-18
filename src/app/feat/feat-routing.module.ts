import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UniversityComponent } from './components/university/university.component';
import { TestComponent } from './components/test/test.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'university', component: UniversityComponent },
  {path:'test', component: TestComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],

  exports: [RouterModule]
})
export class FeatRoutingModule { }
