import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from './menu-item.model';
import { MenuItemService } from './menu-item.service';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  providers: [ MenuItemService ]
})
export class MenuItemComponent implements OnInit {

  menuItemList : MenuItem[] = [];

  constructor(private menuItemService: MenuItemService,private router:Router) { }

  ngOnInit() {
    this.menuItemService.getMenuItemList().subscribe(
      (menuItemList: MenuItem[])=>{
        this.menuItemList = menuItemList;
      }
    )
  }

  addNew(){
    this.router.navigate(['menu-item/addNewMenuItem']);
  }

}
