import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable,of } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { Product } from '../model/product.model';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ProductService{

    productAPIUrl : string = "http://localhost:3000/product";

    constructor(private http:Http,private httpClient:HttpClient){
    }

    // getProductService():Observable<Response>{
    //     return this.http.get(this.productAPIUrl);
    // }

    getProductService():Observable<Product[]>{
        return this.httpClient.get<Product[]>(this.productAPIUrl);            
    }

    getProductServicewithMap():Observable<Product[]>{
        //return this.http.get(this.productAPIUrl).map((response=>response.json()));            
        return this.http.get(this.productAPIUrl)
        .map(this.extractData)
        .catch(this.errorHandling);            
    }

    saveProduct(product:Product):Observable<number>{
        return this.http.post(this.productAPIUrl,product)
        .map(response=>response.status)
        .catch(this.errorHandling);
    }

    getProductById(id:number):Observable<Response>{
        return this.http.get(this.productAPIUrl+"/"+id);
    }

    updateProduct(product:Product):Observable<number>{
        //return this.http.put(this.productAPIUrl+"/"+product.id,product);
        return this.httpClient.put<number>(this.productAPIUrl+"/"+product.id,product);
    }

    deleteProductById(id:number):Observable<Response>{
        return this.http.delete(this.productAPIUrl+"/"+id);
    }

    private extractData(res: Response) {
        console.log(res);
        let body = res.json();     
        for(let product of body){
            if(product.warranty === 'Y')
                product.warranty = "Yes";
            else
                product.warranty = "No";
        }
        return body;
    }

    private errorHandling(error: Response | any){
        return Observable.throw(error.status);
    }
}