import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MydatagridComponent } from './mydatagrid/mydatagrid.component';
import { MenuItemListComponent } from './menu-item-list/menu-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MydatagridComponent,
    MenuItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
