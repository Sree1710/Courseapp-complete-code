import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseViewfunService {

  constructor(private http:HttpClient) { }
 Addcourse(course:any){
  return this.http.post<any>("http://localhost:3000/addcourse",course);
 }
  viewCourse=()=>
  {
    return this.http.get("http://localhost:3000/viewcourse");
  }
}
