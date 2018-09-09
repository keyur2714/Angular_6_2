import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable,of } from 'rxjs';
import { Product } from '../model/product.model';
@Injectable()
export class ProductService{

    productAPIUrl : string = "http://localhost:3000/product";

    constructor(private http:Http){
    }

    getProductService():Observable<Response>{
        return this.http.get(this.productAPIUrl);
    }

    saveProduct(product:Product):Observable<Response>{
        return this.http.post(this.productAPIUrl,product);
    }

    getProductById(id:number):Observable<Response>{
        return this.http.get(this.productAPIUrl+"/"+id);
    }

    updateProduct(product:Product):Observable<Response>{
        return this.http.put(this.productAPIUrl+"/"+product.id,product);
    }

    deleteProductById(id:number):Observable<Response>{
        return this.http.delete(this.productAPIUrl+"/"+id);
    }

}