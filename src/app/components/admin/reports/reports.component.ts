import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import {FormsModule,FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {ExamMarksService} from '../../../services/exam-marks.service';
import {Marks} from '../../../../app/shared/marks.model';

export interface ReportTypes {
  name: string;
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  selected = null;
  chart = []; 
   title = 'Ng7ChartJs By DotNet Techy';
  LineChart=[];
  myControl = new FormControl();
  options: ReportTypes[] = [
    {name: 'Marks'},
    {name: 'Attendance'},
    {name: 'Evaluate'},
    {name: 'Average marks for all the subjects'}

  ];
  filteredOptions: Observable<ReportTypes[]>;
  checker = false;
  marks: Marks[] =[];
  labelArray: string[]=[];
  marksArray:String[]=[];
  marksInNo:Number[]=[];
  marksBelowThirtyFive:Number[]=[];
  marksBelowFiftyFive:Number[]=[];
  marksBelowSixtyFive:Number[]=[];
  marksBelowseventyFive:Number[]=[];
  marksAboveSeventyFive:Number[]=[];
  mark: Marks;
  //checkerGo = false;

  


  constructor(private examMarksService: ExamMarksService) { }

  ngOnInit() {
    // document.getElementById("select").style.visibility="visible";
    this.examMarksService.getCMarksList().subscribe((response) => {
          // console.log(response);
          this.marks= response as Marks[];
          this.marks.forEach(mark => {            
             this.mark = mark as Marks;
             var isodate = new Date(this.mark.date);
             if(isodate != null && (this.mark.marks!=null) &&(isodate.getMonth()+1) ===1 ){
              this.marksInNo[0]=parseInt(this.mark.marks.toString(), 10);
             // console.log(this.marksInNo[0]);
              this.marksArray[0]=this.mark.marks; 
              this.labelArray[0]="January";
            }
            if(isodate != null && (this.mark.marks!=null) &&(isodate.getMonth()+1) ===2 ){
              this.marksInNo[1]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[1]);
              this.marksArray[1]=this.mark.marks;  
              this.labelArray[1]="February";
            }
            if(isodate != null && (this.mark.marks!=null) &&(isodate.getMonth()+1) ===3 ){
              this.marksInNo[2]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[2]);
              this.marksArray[2]=this.mark.marks; 
              this.labelArray[2]="March";
            }
            if(isodate != null && (this.mark.marks!=null) && (isodate.getMonth()+1) ===4 ){
              this.marksInNo[3]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[3]);
              this.marksArray[3]=this.mark.marks; 
              this.labelArray[3]="April";
            }
            if(isodate!= null && (this.mark.marks!=null) && (isodate.getMonth()+1) ===5 ){
              this.marksInNo[4]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[4]);
              this.marksArray[4]=this.mark.marks; 
              this.labelArray[4]="May";
            }
            if(isodate != null && (this.mark.marks!=null) && (isodate.getMonth()+1) ===6 ){
              this.marksInNo[5]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[5]);
              this.marksArray[5]=this.mark.marks; 
              this.labelArray[5]="June";
            }
            if(isodate != null && (this.mark.marks!=null) &&(isodate.getMonth()+1) ===7 ){
              this.marksInNo[6]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[6]);
              this.marksArray[6]=this.mark.marks; 
              this.labelArray[6]="July";
            }
            if(isodate != null && (this.mark.marks!=null) &&(isodate.getMonth()+1) ===8 ){
              this.marksInNo[7]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[7]);
              this.marksArray[7]=this.mark.marks; 
              this.labelArray[7]="August";
            }
            if(isodate != null && (this.mark.marks!=null) && (isodate.getMonth()+1) ===9 ){
              this.marksInNo[8]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[8]);
              this.marksArray[8]=this.mark.marks; 
              this.labelArray[8]="September";
            }
            if(isodate != null && (this.mark.marks!=null) &&(isodate.getMonth()+1) ===10 ){
              this.marksInNo[9]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[9]);
              this.marksArray[9]=this.mark.marks; 
              this.labelArray[9]="Octomber";
            }
            if(isodate != null && (this.mark.marks!=null) &&(isodate.getMonth()+1) ===11 ){
              this.marksInNo[10]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[10]);
              this.marksArray[10]=this.mark.marks; 
              this.labelArray[10]="November";
            }
            if(isodate != null && (this.mark.marks!=null) && (isodate.getMonth()+1) ===12 ){
              this.marksInNo[11]=parseInt(this.mark.marks.toString(), 10);
              //console.log(this.marksInNo[11]);
              this.marksArray[11]=this.mark.marks; 
              this.labelArray[11]="December";
            }
            //console.log(this.labelArray[8]);
           
          });
          this.evaluate(this.marksInNo);
    });
    
 
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | ReportTypes>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
    
    // console.log(this.selected);
    
}
displayFn(user?: ReportTypes): string | undefined {
  return user ? user.name : undefined;
}
private _filter(name: string): ReportTypes[] {
  const filterValue = name.toLowerCase();

  return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
}

public  getReports(report) {
  var selectedReport =null;
  this.options.forEach((el) => {
    if (el === report) {
      selectedReport = el;
      console.log(selectedReport );
   }
   
});

if(selectedReport.name === 'Marks' ){
  console.log('I am inside marks select');
 this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
//  labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
labels:this.labelArray,
 datasets: [{
     label: 'Monthly asssignment marks for C',
     //data: [90,70 , 30, 50, 20, 10,15,16,19,30,10,90],
     data:this.marksArray,
     fill:false,
     lineTension:0.2,
     borderColor:"#009688",
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"Results",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});
}
if(selectedReport.name === 'Attendance' ){
  console.log('I am inside barchart select select');
  this.LineChart = new Chart('lineChart', {
    type: 'bar',
  data: {
   labels: ["1stWeek", "2ndWeek", "3rdWeek", "4thWeek", "5thWeek", "6thWeek"],
   datasets: [{
       label: 'Attendance for previous weeks',
       data: [9,7 , 3, 5, 2, 10],
       backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)',
           'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 1
   }]
  }, 
  options: {
   title:{
       text:"Attendance",
       display:true
   },
   scales: {
       yAxes: [{
           ticks: {
               beginAtZero:true
           }
       }]
   }
  }
  });
}
  console.log(selectedReport.name);
  if(selectedReport.name === 'Evaluate' ){
    console.log('I am inside piechart select select');
  // pie chart:
this.LineChart = new Chart('lineChart', {
  type: 'pie',
data: {
 //labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 labels: ["Below Thirty Five", "Below Fifty five", "Below Sixty Five", "Below seventy Five", "Above Seventy"], 
 datasets: [{
     label: 'The percentage of the grades that you have earned',
     //data: [9,7 , 3, 5, 2, 10],
     data: [this.marksBelowThirtyFive.length,this.marksBelowFiftyFive.length,this.marksBelowSixtyFive.length,this.marksBelowseventyFive,this.marksAboveSeventyFive.length],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(255, 192, 192, 0.2)',
         ' rgba(153, 102, 255, 0.2)'
         //'rgba(153, 102, 255, 0.2)'
         //'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(255, 192, 192, 1)',
         'rgba(153, 102, 255, 1)'
         //'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"The percentage of the grades that you have earned",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});
  }
  if(selectedReport.name === 'Average marks for all the subjects' ){
    console.log('I am inside While all subjects averagesselect');
    this.LineChart = new Chart('lineChart', {
      type: 'bar',
    data: {
     labels: ["C", "Java Programming", "Web Development", "Python", "Graphic Design"],
     datasets: [{
         label: 'Average marks for all the subjects',
         data: [75,70 , 30, 55, 28, 86],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)'
             //'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)'
             //'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Averages",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });
  }
}
private evaluate(evlarray :Number[]){
  evlarray.forEach((element) => {
    if (element < 35) {
       this.marksBelowThirtyFive.push(element);
       //console.log(element );
       }  else if ((element >= 35) && (element < 55)) {
          this.marksBelowFiftyFive.push(element);
         // console.log(element );
        } else if ((element >= 55) && (element < 65)) {
          this.marksBelowSixtyFive.push(element);
          //console.log(element );
        }else if ((element >= 65) && (element < 75)) {
          this.marksBelowseventyFive.push(element);
          //console.log(element );
        }else if ((element >= 75)) {
          this.marksAboveSeventyFive.push(element);
          console.log(element );
        }
   
});
}

}

    
  


