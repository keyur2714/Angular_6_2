import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EmpListComponent } from '../emp-list/emp-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { AuthGuard } from '../auth.guard';

const routes : Routes = [            
      { 
        path:'', 
        component : EmpListComponent,
        canActivate : [AuthGuard],
        data: [{ staticData : 'Hello' }],
        children : [
          {
            path : 'empDetail/:empId' , component : EmployeeDetailComponent
          }
        ]
      },
      {
        path : 'employeeDetail/:empId' , component: EmployeeDetailComponent
      }
    ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]  
})
export class EmployeeRoutingModule {
  constructor(){
    console.log(" Employee Routing Module Loaded...! ");
  }
 }
