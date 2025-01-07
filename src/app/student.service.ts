import { Injectable } from '@angular/core';
   import { HttpClient } from '@angular/common/http';
   import { Observable } from 'rxjs';

   export interface Student {
     id: number;
     name: string;
     email: string;
   }

   @Injectable({
     providedIn: 'root'
   })
   export class StudentService {
     private apiUrl = 'http://localhost:4200/students';

     constructor(private http: HttpClient) { }

     getStudents(): Observable<Student[]> {
       return this.http.get<Student[]>(this.apiUrl);
     }

     getStudent(id: number): Observable<Student> {
       return this.http.get<Student>(`${this.apiUrl}/${id}`);
     }

     addStudent(student: Student): Observable<Student> {
       return this.http.post<Student>(this.apiUrl, student);
     }

     updateStudent(id: number, student: Student): Observable<Student> {
       return this.http.put<Student>(`${this.apiUrl}/${id}`, student);
     }

     deleteStudent(id: number): Observable<void> {
       return this.http.delete<void>(`${this.apiUrl}/${id}`);
     }
   }