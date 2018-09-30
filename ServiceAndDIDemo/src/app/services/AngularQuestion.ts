import { IQuestion } from './IQuestion';
export class AngularQuestion extends IQuestion{
    askQuestion():string{        
        super.sayHello();
        return "What is Angular?";
    }
}