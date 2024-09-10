import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses-detail',
  standalone: true,
  imports: [],
  templateUrl: './courses-detail.component.html',
  styleUrl: './courses-detail.component.css'
})
export class CoursesDetailComponent {

  course: string ='';
constructor(private route: ActivatedRoute){
  this.route.params.subscribe(params =>{
this.course = params['course']
  })
}
}
