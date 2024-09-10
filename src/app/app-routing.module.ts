import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './welcome/home/home.component';


const routes :Routes = [
  {
    path: '',
    loadChildren :() => import('./welcome/welcome.module').then(m=> m.WelcomeModule)
  },
  {
    path: 'contact',
    loadChildren:() => import('./courses/courses.module').then(m=>m.CoursesModule)
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
