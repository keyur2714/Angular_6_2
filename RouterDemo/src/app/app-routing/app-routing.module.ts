import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { PageNotFoundComponent } from '../page-not-found.component';
import { EmpListComponent } from '../emp-list/emp-list.component';
import { EmployeeDetailComponent } from '../employee-detail/employee-detail.component';
import { AuthGuard } from '../auth.guard';

const routes : Routes = [            
      { path: '' , redirectTo : '/home' , pathMatch : 'full'},
      { path:'home' , component: HomeComponent},
      { 
        path:'empList/:id/:name', 
        component : EmpListComponent,
        canActivate : [AuthGuard],
        children : [
          {
            path : 'empDetail/:empId' , component : EmployeeDetailComponent
          }
        ]
      },
      {
        path : 'employeeDetail/:empId' , component: EmployeeDetailComponent
      },
      { path:'aboutus' , component: AboutusComponent},
      { path:'contactus' , component: ContactusComponent},
      { path : '**' , component : PageNotFoundComponent}    
    ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
  constructor(){
    console.log(" App Routing Module Loaded...! ");
  }
 }
