import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable,of } from 'rxjs';
@Injectable()
export class ProductService{

    productAPIUrl : string = "http://localhost:3001/product";

    constructor(private http:Http){
    }

    getProductService():Observable<Response>{
        return this.http.get(this.productAPIUrl);
    }

}