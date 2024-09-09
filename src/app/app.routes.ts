import { Routes , RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'home',
  component:HomeComponent
},
{
  path: 'contact',
  component:ContactComponent
},
{
  path:'about',
  component:AboutComponent
},
{
  path: '**',
  component: PageNotFoundComponent
}
]

@NgModule({
declarations: [],
imports: [
  CommonModule,
  HomeComponent,
  ContactComponent,
  AboutComponent
]
})
export class AppModule { }
