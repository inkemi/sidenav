import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';

const routes: Routes = [
  {path: '', component: AppLayoutComponent,
  children: [
    {
      path: 'user',
      component: AppComponent
    },
    {
      path: 'folder',
      component: AppComponent
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
