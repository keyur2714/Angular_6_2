import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { MenuItem } from './menu-item.model';
@Injectable()
export class MenuItemService{
    
    menuItemListUrl: string = 'http://localhost:3000/menuItem';

    constructor(private httpClient: HttpClient){}

    getMenuItemList():Observable<MenuItem[]>{
        return this.httpClient.get<MenuItem[]>(this.menuItemListUrl);
    }

    getMenuItemById(id:number):Observable<MenuItem>{
        return this.httpClient.get<MenuItem>(this.menuItemListUrl+"/"+id);
    }
}