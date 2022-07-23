import { Component, OnInit } from '@angular/core';
import { CourseViewfunService } from '../course-viewfun.service';

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  constructor(private api:CourseViewfunService) 
  {
   api.viewCourse().subscribe(
    (response=>{
      this.data=response
    })
   )
  }

  ngOnInit(): void {
  }
data:any=[]
}
