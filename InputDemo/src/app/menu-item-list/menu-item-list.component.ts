import { Component, OnInit } from '@angular/core';
import { MenuItem } from './menu-item.model';
@Component({
  selector: 'app-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {

  menuItemList : MenuItem[] = [];
  headerList: string[] = ["Code","Desc","Price"];
  columnList: string[] = ["itemCode","itemDesc","unitPrice"];

  constructor() { }

  ngOnInit() {
    let menuItem1 = new MenuItem();
    menuItem1.id = 1;
    menuItem1.itemCode = "TEA";
    menuItem1.itemDesc = "Masala Tea";
    menuItem1.unitPrice = 10;

    let menuItem2 = new MenuItem();
    menuItem2.id = 2;
    menuItem2.itemCode = "COFFEE";
    menuItem2.itemDesc = "Cold Coffee";
    menuItem2.unitPrice = 20;

    let menuItem3 = new MenuItem();
    menuItem3.id = 3;
    menuItem3.itemCode = "MILK";
    menuItem3.itemDesc = "Masala Milk";
    menuItem3.unitPrice = 15;

    this.menuItemList.push(menuItem1);
    this.menuItemList.push(menuItem2);
    this.menuItemList.push(menuItem3);
  }

}
