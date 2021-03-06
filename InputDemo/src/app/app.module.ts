import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MydatagridComponent } from './mydatagrid/mydatagrid.component';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';
import { CountryComponent } from './country/country.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';
import { ServerComponent } from './server/server.component';
import { ServerDetailComponent } from './server-detail/server-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MydatagridComponent,
    MenuItemListComponent,
    CountryComponent,
    MyDropdownComponent,
    ServerComponent,
    ServerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
