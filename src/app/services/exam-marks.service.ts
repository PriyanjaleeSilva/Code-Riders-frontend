import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Marks } from '../shared/marks.model';

@Injectable({
  providedIn: 'root'
})
export class ExamMarksService {

  
  selectedMarks: Marks;
  marks: Marks[];
  selectedCMarks: Marks;
  Cmarks: Marks[];
  selectedJavaMarks: Marks;
  Javamarks: Marks[];

  readonly baseURL = 'http://localhost:3000/exam_marks'; //phython
  readonly c_URL = 'http://localhost:3000/exam_marks/c';
  readonly java_URL = 'http://localhost:3000/exam_marks/javaforbeginners';

  constructor(private http : HttpClient) { }

  

  postMarks(mks : Marks){
    return this.http.post(this.baseURL, mks);
}

  putMarks(mks: Marks) {
  return this.http.put(this.baseURL + `/${mks._id}`, mks);
}

  getMarksList() {//phython
  return this.http.get(this.baseURL);
}

  getCMarksList() {
  return this.http.get(this.c_URL);
}

  getJavaMarksList() {
  return this.http.get(this.java_URL);
}

}
