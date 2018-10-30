import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MenuItemComponent } from './admin/menu-item/menu-item.component';
import { MenuItemEntryComponent } from './admin/menu-item/menu-item-entry/menu-item-entry.component';
import { MenuItemDetailComponent } from './admin/menu-item/menu-item-detail/menu-item-detail.component'; 
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './auth/auth.guard';
const routes:Routes = [
    {
        path: '',redirectTo : 'home',pathMatch: 'full'        
    },
    {
        path: 'home',component : HomeComponent,canActivate : [AuthGuard]        
    },
    {
        path: 'aboutUs',component : AboutusComponent
    },
    {
        path: 'contactUs',component : ContactusComponent
    },
    {
        path: 'login',component : LoginComponent
    },
    {
        path: 'logout',component : LogoutComponent
    },
    {
        path: 'menu-item',
        component : MenuItemComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'addNewMenuItem',component: MenuItemEntryComponent
            },
            {
                path: 'menuItemDetail/:id',component: MenuItemDetailComponent
            }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    constructor(){
        console.log("App Routing Module Loaded...!");
    }
}