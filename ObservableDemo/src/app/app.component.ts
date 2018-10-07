import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { DummyService } from './services/dummy.service';
import { Student } from './services/student.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DummyService]
})
export class AppComponent implements OnInit{
  title = 'Observable Demo';
  num: number = 0;
  studentList : Student[] = [];

  numObservable = Observable.interval(100);

  constructor(private dummyService : DummyService){}

  ngOnInit(){
    let numbers = Observable.interval(1000);
    numbers.subscribe(
      (num)=>{
        console.log(num);
        this.num = num;
      }
    )
    let title = Observable.of(this.title);
      title.subscribe((data)=>{
      console.log(data);
    })    

    //this.studentList = this.dummyService.getStudentList();
    this.dummyService.getStudentCapitalNameList().subscribe(
      (data:Student[])=>{
        this.studentList = data;
      },
      (error)=>{

      }
    )
  }
}
