import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Angular2TokenService } from 'angular2-token';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthService } from '../app/services/auth/auth.service';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';

import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentDialogComponent } from './students/dialogs/add-student-dialog/add-student-dialog.component';
import { EditStudentDialogComponent } from './students/dialogs/edit-student-dialog/edit-student-dialog.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AddTeacherDialogComponent } from './teachers/dialogs/add-teacher-dialog/add-teacher-dialog.component';
import { EditTeacherDialogComponent } from './teachers/dialogs/edit-teacher-dialog/edit-teacher-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    StudentsComponent,
    AddStudentDialogComponent,
    EditStudentDialogComponent,
    TeachersComponent,
    AddTeacherDialogComponent,
    EditTeacherDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule,
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
  ],
  providers: [Angular2TokenService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}

declare module '@angular/core' {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}
