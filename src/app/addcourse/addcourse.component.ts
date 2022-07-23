import { Component, OnInit } from '@angular/core';
import { CourseViewfunService } from '../course-viewfun.service';

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
course={courseTitle:"",
courseDescription:"",
courseDate:"",
courseVenue:"",
courseDuration:""
}
  constructor(private courseservice:CourseViewfunService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    this.courseservice.Addcourse(this.course).subscribe((data)=>{
    alert("Success");
    })
  }
}
