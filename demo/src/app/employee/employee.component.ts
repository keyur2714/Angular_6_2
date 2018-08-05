import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  selectedEmoloyee : string  = '';
  employeeNameList: string[] = ["keyur","denish","vinit"];

  // employeeList = [{
  //   "empId":27,
  //   "name":"keyur",
  //   "age":31,
  //   "city":"surat"
  // }];

  employeeList: Employee[] = [];
  constructor() {
    console.log("Employee Object is Created...!");
   }

  ngOnInit() {
    console.log("Component Initialized...!");
    const tmp1Employee = {
      "empId":27,
      "name":"keyur",
      "age":31,
      "city":"surat"
    };
    const tmp2Employee = {
      "empId":26,
      "name":"denish",
      "age":32,
      "city":"surat"
    };
    this.employeeList.push(tmp1Employee);
    this.employeeList.push(tmp2Employee);
  }

  addNewEmployee(name):void{
    console.log("Add New Employee Called...!"+name);
    this.employeeNameList.push(name);
  }

  setSelected(name):void {
    this.selectedEmoloyee = name;
  }

  deleteEmployee(idx:number):void{
    console.log(idx);
    this.employeeNameList.splice(idx,1);
  }
}
