import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Product = new Product();
  isValidProduct : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  save(frm){
    console.log(frm);
    console.log(frm.controls);
    if(frm.valid){
      console.log(this.product.code+" "+this.product.desc+" "+this.product.unitPrice);
      this.isValidProduct = true;
    }
  }
}
