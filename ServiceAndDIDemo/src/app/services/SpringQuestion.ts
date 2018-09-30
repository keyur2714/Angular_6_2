import { IQuestion } from './IQuestion';
export class SpringQuestion extends IQuestion{
    askQuestion():string{
        super.sayHello();
        return "What is Spring?";
    }
}