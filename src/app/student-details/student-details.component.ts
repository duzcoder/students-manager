import { Component, OnInit } from '@angular/core';
   import { ActivatedRoute } from '@angular/router';
   import { StudentService, Student } from '../student.service';

   @Component({
     selector: 'app-student-details',
     templateUrl: './student-details.component.html',
     styleUrls: ['./student-details.component.css']
   })
   export class StudentDetailsComponent implements OnInit {
     student: Student | undefined;

     constructor(
       private route: ActivatedRoute,
       private studentService: StudentService
     ) { }

     ngOnInit(): void {
       this.getStudent();
     }

     getStudent(): void {
       const id = Number(this.route.snapshot.paramMap.get('id'));
       this.studentService.getStudent(id).subscribe(student => this.student = student);
     }
   }