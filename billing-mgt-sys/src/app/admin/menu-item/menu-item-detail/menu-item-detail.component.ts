import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItemService } from '../menu-item.service';
import { MenuItem } from '../menu-item.model';

@Component({
  selector: 'app-menu-item-detail',
  templateUrl: './menu-item-detail.component.html',
  styleUrls: ['./menu-item-detail.component.css']
})
export class MenuItemDetailComponent implements OnInit {

  menuItemId: number = 0;
  menuItem: MenuItem = new MenuItem();

  constructor(private activatedRoute:ActivatedRoute,private menuItemService:MenuItemService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params)=>{       
        this.menuItemId = params.id;
        this.getMenuItemById();
      }
    )    
  }

  getMenuItemById(){
    this.menuItemService.getMenuItemById(this.menuItemId).subscribe(
      (menuItem:MenuItem)=>{
        this.menuItem = menuItem;
      }
    )
  }

}
