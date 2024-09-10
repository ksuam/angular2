import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    HomeComponent


  ]
})
export class WelcomeModule { }
