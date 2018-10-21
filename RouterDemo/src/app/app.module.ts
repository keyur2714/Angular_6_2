import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    PageNotFoundComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([            
      { path: '' , redirectTo : '/home' , pathMatch : 'full'},
      { path:'home' , component: HomeComponent},
      { path:'empList/:id/:name', component : EmpListComponent},
      { path:'aboutus' , component: AboutusComponent},
      { path:'contactus' , component: ContactusComponent},
      { path : '**' , component : PageNotFoundComponent}    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
