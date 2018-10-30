import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HTTP_INTERCEPTORS  } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MenuItemComponent } from './admin/menu-item/menu-item.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuItemDetailComponent } from './admin/menu-item/menu-item-detail/menu-item-detail.component';
import { MenuItemEntryComponent } from './admin/menu-item/menu-item-entry/menu-item-entry.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { TokenInterceptor } from './auth/token-interceptor';
import { LogoutComponent } from './logout/logout.component';
import { ErrorInterceptor } from'./common/error-interceptor';
import { LoggingInterceptor } from './common/logging-interceptor';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    MenuItemComponent,
    AboutusComponent,
    MenuItemDetailComponent,
    MenuItemEntryComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    }, 
    { provide: HTTP_INTERCEPTORS, 
      useClass: ErrorInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
