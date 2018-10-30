import { Injectable } from '@angular/core';
import { HttpClient , HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/Rx';
@Injectable()
export class AuthService{

    isValidUser : boolean = false;
    successUrl : string = '/home';

    constructor(private httpClient: HttpClient){}

    getToken():string{
        return localStorage.getItem("token");
    }

    authenticate(userName: string,password: string):Observable<boolean>{
        if(userName === 'keyurjava27@gmail.com' && password === 'denish27'){
            this.isValidUser = true;
            localStorage.setItem("token","keyurjava."+userName);
        }   
        if(this.isValidUser)     
            return Observable.of(this.isValidUser);
        else
            return throwError({ error: { status: 401, message: 'Unauthorised' } });
    }

    logout():void{
        this.isValidUser = false;
        localStorage.removeItem("token");
    }

    isLoggedIn():boolean{
        return this.isValidUser;
    }

    getSuccessUrl():string{
        return this.successUrl;
    }
    setSuccessUrl(url:string):void{
        this.successUrl = url;
    }
}