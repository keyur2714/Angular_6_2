import { Student } from './student.model';
import { Observable } from 'rxjs';
export class DummyService {

    getStudentList():Observable<Student[]>{
        let studentList = [];

        let stud1 = new Student();
        stud1.name = "keyur";
        stud1.city = "pune";

        let stud2 = new Student();
        stud2.name = "denish";
        stud2.city = "student";

        let stud3 = new Student();
        stud3.name = "vinit";
        stud3.city = "surat";

        studentList.push(stud1);
        studentList.push(stud2);
        studentList.push(stud3);

        return Observable.of(studentList);
    }

    getStudentCapitalNameList():Observable<Student[]>{
        return this.getStudentList().map(this.extractStudentList);
    }
    extractStudentList(data:Student[]){
        for(let student of data){
            student.name = student.name.toUpperCase();
        }
        return data;
    }
}