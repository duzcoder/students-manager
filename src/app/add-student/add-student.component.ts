import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService, Student } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  name: string = '';
  email: string = '';

  constructor(
    private studentService: StudentService,
    private router: Router
  ) { }

  addStudent(): void {
    const newStudent: Student = {
      id: 0,
      name: this.name,
      email: this.email,
    };
    this.studentService.addStudent(newStudent).subscribe(() => {
      this.router.navigate(['/students']);
    });
  }
}
