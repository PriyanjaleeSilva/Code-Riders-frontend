import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

import { StudentDashboardComponent } from './components/student/student-dashboard/student-dashboard.component';
import { StudentEnrollmentsComponent } from './components/student/student-enrollments/student-enrollments.component';
import { PaymentComponent } from './components/student/payment/payment.component';
import { StudentNoticeComponent } from './components/student/student-notice/student-notice.component';

import { TutorDashboardComponent } from './components/tutor/tutor-dashboard/tutor-dashboard.component';

import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';

import { ContactTutorPageComponent } from './components/contact-tutor-page/contact-tutor-page.component';
import { AuthGuard } from './guards/auth.guard';
import { AttendanceManagementComponent } from './components/admin/attendance-management/attendance-management.component';
import { ExamMarksComponent } from './components/admin/exam-marks/exam-marks.component';
import { CourseComponent } from './components/student/course/course.component';
import { ReportsComponent } from './components/admin/reports/reports.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'student_dashboard', component: StudentDashboardComponent, canActivate: [AuthGuard] },
  { path: 'student_enrollments', component: StudentEnrollmentsComponent, canActivate: [AuthGuard]},
  { path: 'course', component: CourseComponent, canActivate: [AuthGuard]},
  { path: 'payment', component: PaymentComponent },
  { path: 'student_notice', component: StudentNoticeComponent },

  { path: 'tutor_dashboard', component: TutorDashboardComponent, canActivate: [AuthGuard] },
  { path: 'contact_tutor_page', component: ContactTutorPageComponent },

  { path: 'admin_dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'attendance_management', component: AttendanceManagementComponent, canActivate: [AuthGuard]},
  { path: 'exam_marks', component: ExamMarksComponent, canActivate: [AuthGuard]},
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
