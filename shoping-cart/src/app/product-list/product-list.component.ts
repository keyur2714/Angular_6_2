import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
 
  productList: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductService().subscribe(
      (data)=>{
        console.log(data.json());
        this.productList = data.json();
      }
  )
  }

}
