import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { AppRoutingModule } from './app.routes';
   import { AppComponent } from './app.component';
   import { StudentListComponent } from './student-list/student-list.component';
   import { StudentDetailsComponent } from './student-details/student-details.component';
   import { AddStudentComponent } from './add-student/add-student.component';
   import { FormsModule } from '@angular/forms';
   import { HttpClientModule } from '@angular/common/http';

   @NgModule({
     declarations: [
       AppComponent,
       
     ],
     imports: [
       BrowserModule,
       AppRoutingModule,
       FormsModule,
       HttpClientModule,
       StudentListComponent,
       StudentDetailsComponent,
       AddStudentComponent
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }