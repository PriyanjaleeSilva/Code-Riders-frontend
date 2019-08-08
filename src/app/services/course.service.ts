import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Course } from '../shared/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  selectedCourse: Course;
  courses: Course[];
  readonly baseURL = 'http://localhost:3000/student_enrollments'; //backend 

  constructor(private http : HttpClient) { }

  postCourse(course : Course){
    return this.http.post(this.baseURL, course);
  }

  getCourseList() {
    return this.http.get(this.baseURL);
  }
}
