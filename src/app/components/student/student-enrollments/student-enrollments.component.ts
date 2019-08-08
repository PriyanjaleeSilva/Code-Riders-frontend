import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CourseService } from '../../../services/course.service';
import { Course } from '../../../shared/course.model';

declare var M: any;

import * as N from '../../../../assets/materialize/materialize/js/materialize.min.js';

@Component({
  selector: 'app-student-enrollments',
  templateUrl: './student-enrollments.component.html',
  styleUrls: ['./student-enrollments.component.scss'],
  providers: [ CourseService ]
})
export class StudentEnrollmentsComponent implements OnInit {

  courseData = {
    _id: "",
    course: "",
    username: "",
    fullname: "",
    email: ""
  };

  constructor(private courseService: CourseService) { }

  ngOnInit() {
    var elems = document.querySelectorAll('.modal');
    var instances = N.Modal.init(elems);

    var options = document.querySelectorAll('select');
    var instances = N.FormSelect.init(options);

    this.resetForm();
  }

  resetForm() {
   
    this.courseData = {
      _id: "",
      course: "",
      username: "",
      fullname: "",
      email: ""
    };
}

  onSubmit(){
    
    this.courseService.postCourse(this.courseData)
       .subscribe(
        res => {
          console.log(res);
          M.toast({ html: 'Enrolled successfully', classes: 'rounded '});
          this.resetForm();
          },
          err => console.log(err)
       )
  }
  

}
