import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'osp', loadChildren: () => import('./feat/feat.module').then(module => module.FeatModule) },
  { path: '', loadChildren: () => import('./core/core.module').then(module => module.CoreModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
