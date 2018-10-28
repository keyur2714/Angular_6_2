import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmpListComponent } from '../emp-list/emp-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { EmployeeRoutingModule } from './employee-routing.module';
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule,
    EmployeeRoutingModule
  ],
  declarations: [
    EmpListComponent,
    EmployeeDetailComponent
  ]
})
export class EmployeeModule { 
  constructor(){
    console.log("Employee Module Loaded...");
  }
}
