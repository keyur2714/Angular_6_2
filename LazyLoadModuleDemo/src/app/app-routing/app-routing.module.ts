import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule,NoPreloading,PreloadAllModules } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { PageNotFoundComponent } from '../page-not-found.component';
import { AuthGuard } from '../auth.guard';

const routes : Routes = [            
      { path: '' , redirectTo : '/home' , pathMatch : 'full'},
      { path:'home' , component: HomeComponent},
      { 
        path:'empList/:id/:name',         
        loadChildren: '../employee/employee.module#EmployeeModule'
      },
      { path:'aboutus' , component: AboutusComponent},
      { path:'contactus' , component: ContactusComponent},
      { path : '**' , component : PageNotFoundComponent}    
    ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,
      {preloadingStrategy : PreloadAllModules}
    ),    
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
