import { Component, OnInit } from '@angular/core';
import { ExamMarksService } from '../../../services/exam-marks.service';
import { NgForm } from '@angular/forms';
import { Marks } from '../../../shared/marks.model';

import * as N from '../../../../assets/materialize/materialize/js/materialize.min.js';
declare var M: any;

@Component({
  selector: 'app-exam-marks',
  templateUrl: './exam-marks.component.html',
  styleUrls: ['./exam-marks.component.scss'],
  providers: [ ExamMarksService ]
})
export class ExamMarksComponent implements OnInit {

  
  constructor(private examMarksService: ExamMarksService) { }

  ngOnInit() {
    
    this.resetForm();
    this.refreshMarksList();
    this.refreshCMarksList();
    this.refreshJavaMarksList();
    
  }

  onSubmit(form : NgForm){
    if(form.value._id == ""){
    this.examMarksService.postMarks(form.value).subscribe((res) => {
      this.resetForm(form);
      this.refreshMarksList();
      this.refreshCMarksList();
      this.refreshJavaMarksList();
      N.toast({ html: 'Saved successfully', classes: 'rounded '});
    });
    }
    else {
      this.examMarksService.putMarks(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshMarksList();
        this.refreshCMarksList();
        this.refreshJavaMarksList();
        N.toast({ html: 'Updated successfully', classes: 'rounded '});
      });
    }
  }
  
  refreshMarksList() {
    this.examMarksService.getMarksList().subscribe((res) => {
      this.examMarksService.marks = res as Marks[];
    });
  }

  refreshCMarksList() {
    this.examMarksService.getCMarksList().subscribe((res) => {
      this.examMarksService.Cmarks = res as Marks[];
    });
  }

  refreshJavaMarksList() {
    this.examMarksService.getJavaMarksList().subscribe((res) => {
      this.examMarksService.Javamarks = res as Marks[];
    });
  }


  resetForm(form?: NgForm) {
    if (form)
        form.reset();
    this.examMarksService.selectedMarks = {
      _id: "",
      course: "",
      fullname: "",
      username: "",
      marks: "",
      date:new Date(0)
    }
  
}

onEdit(mks : Marks){
  this.examMarksService.selectedMarks = mks;
}
}
