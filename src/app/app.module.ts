import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as $ from 'jquery';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { StudentNavbarComponent } from './components/student/student-navbar/student-navbar.component';
import { StudentSidenavComponent } from './components/student/student-sidenav/student-sidenav.component';
import { StudentFooterComponent } from './components/student/student-footer/student-footer.component';
import { TutorNavbarComponent } from './components/tutor/tutor-navbar/tutor-navbar.component';
import { TutorFooterComponent } from './components/tutor/tutor-footer/tutor-footer.component';
import { TutorSidenavComponent } from './components/tutor/tutor-sidenav/tutor-sidenav.component';
import { TutorDashboardComponent } from './components/tutor/tutor-dashboard/tutor-dashboard.component';
import { TutorFormComponent } from './components/tutor/tutor-form/tutor-form.component';
import { TutorNoticeComponent } from './components/tutor/tutor-notice/tutor-notice.component';
import { ContactTutorPageComponent } from './components/contact-tutor-page/contact-tutor-page.component';

import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { StudentEnrollmentsComponent } from './components/student/student-enrollments/student-enrollments.component';
import { AttendanceManagementComponent } from './components/admin/attendance-management/attendance-management.component';
import { ExamMarksComponent } from './components/admin/exam-marks/exam-marks.component';
import { CourseComponent } from './components/student/course/course.component';
import { PaymentComponent } from './components/student/payment/payment.component';
import { StudentNoticeComponent } from './components/student/student-notice/student-notice.component';
import { CourseDetailsComponent } from './components/admin/course-details/course-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReportsComponent } from './components/admin/reports/reports.component';
import {MaterialModule} from './material';
import { ReactiveFormsModule  } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageComponent,
    LoginComponent,
    StudentDashboardComponent,
    StudentNavbarComponent,
    StudentSidenavComponent,
    StudentFooterComponent,
    TutorNavbarComponent,
    TutorFooterComponent,
    TutorSidenavComponent,
    TutorDashboardComponent,
    TutorFormComponent,
    TutorNoticeComponent,
    ContactTutorPageComponent,
    AdminDashboardComponent,
    StudentEnrollmentsComponent,
    AttendanceManagementComponent,
    ExamMarksComponent,
    CourseComponent,
    PaymentComponent,
    StudentNoticeComponent,
    CourseDetailsComponent,
    ReportsComponent,   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers: [AuthenticationService, AuthGuard,
     {
       provide: HTTP_INTERCEPTORS,
       useClass: TokenInterceptorService,
       multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
