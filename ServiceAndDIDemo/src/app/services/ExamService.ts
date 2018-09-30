import { Injectable } from '@angular/core';
import { IQuestion } from './IQuestion';
import { LoggingService } from './logging.service';
@Injectable()
export class ExamService{

    constructor(private iQuestion: IQuestion,private loggingService:LoggingService){
    }

    startExam():string{
        this.loggingService.logInfo("Inside Start Method of Exam Service.")
        let question = this.iQuestion.askQuestion();            
        return question;
    }

}