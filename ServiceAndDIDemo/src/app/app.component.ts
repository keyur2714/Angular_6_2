import { Component,OnInit } from '@angular/core';
import { ExamService } from './services/ExamService';
import { LoggingService } from './services/logging.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Services & Di Demo';
  question : string = '';
  constructor(private examService : ExamService,private loggingService: LoggingService){
  }

  ngOnInit(){
    this.loggingService.logInfo("Inside Init Method of App Component.")
    this.question = this.examService.startExam();
  }

}
