import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  //Javascript way to create object
  /*student = {
    "rollNo":27,
    "name":"keyur",
    "course":"Angular",
    "branch":"Pimple Saudagar"
  };*/
  selectedStudent: Student = new Student();
  studentList: Student[] = [
    {
      "rollNo": 26,
      "name": "denish",
      "course": "java",
      "branch": "Mumbai"
    },
    {
      "rollNo": 44,
      "name": "vinit",
      "course": "BigData",
      "branch": "Surat"
    }
  ];

  constructor() { }

  ngOnInit() {
    /*this.student.rollNo = 27;
    this.student.name = "keyur";
    this.student.course = "Angular";
    this.student.branch = "Pimple Saudagar";*/
    let student = new Student();
    student.rollNo = 27;
    student.name = "keyur";
    student.course = "Angular";
    student.branch = "Pimple Saudagar";
    this.studentList.push(student);
  }

}
