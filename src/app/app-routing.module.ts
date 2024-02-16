import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feat/components/login/login.component';

const routes: Routes = [
  {path: '', loadChildren: ()=> import('./feat/feat.module').then(module => module.FeatModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
