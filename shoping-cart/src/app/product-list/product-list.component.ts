import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.model';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  product : Product = new Product();
  productList: Product[] = [];
  isUpdate: boolean = false;

  statusCode: number = 0;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();  
  }

  getProductList(){
    // this.productService.getProductService().subscribe(
    //     (data)=>{
    //       //console.log(data.json());
    //       this.productList = data;
    //     }
    // )

    this.productService.getProductServicewithMap().subscribe(
        (data)=>{
          //console.log(data.json());
          this.productList = data;
        }
    )
  }

  save(){    
    if(this.product.id != 0){
      if(this.product.warranty){
        this.product.warranty = 'Y';
      }else{
        this.product.warranty = 'N';
      }
      console.log(this.product);

      this.productService.saveProduct(this.product).subscribe(
        (status)=>{
          console.log(status);
          this.statusCode = status;
          this.getProductList();
        },
        (error)=>{
          console.log(error);
          this.statusCode = error;
        }
      )
    }        
  }

  edit(id){
    this.productService.getProductById(id).subscribe(
      (response)=>{        
        this.product = response.json();        
        console.log(this.product.warranty); 
        this.isUpdate = true;
      },
      (error)=>{
        console.log(error);
      }
    )    
  }

  update(){
    if(this.product.id != 0){
      if(this.product.warranty){
        this.product.warranty = 'Y';
      }else{
        this.product.warranty = 'N';
      }
      console.log(this.product);

      this.productService.updateProduct(this.product).subscribe(
        (response)=>{
          console.log(response.status);
          console.log(response.json());
          this.statusCode = response.status;
          this.isUpdate = false;
          this.getProductList();
        },
        (error)=>{
          console.log(error);
        }
      )
    }        
  }

  delete(id){
    let msg = confirm("Are you Sure want to delete?");
    if(msg){    
      this.productService.deleteProductById(id).subscribe(
        (response)=>{        
          this.statusCode = 204;
          this.getProductList();
        },
        (error)=>{
          console.log(error);
          this.statusCode = error.status;
        }
      )
    }
  }

}
