import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginErrorMsg = '';

  email:string = '';
  password : string = '';

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {
  }

  login(f):void{
    console.log(f);
    this.email = f.controls["email"].value;
    this.password = f.controls["password"].value;
    this.authService.authenticate(this.email,this.password).subscribe(
      (isValidUser: boolean)=>{
        if(isValidUser){
          let url = this.authService.getSuccessUrl();
          this.router.navigate([url]);
        }else{
          this.loginErrorMsg = 'Invalid Username or Password';
          this.router.navigate(['/login']);
        }
      },
      (error)=>{
        console.log(error.error);
        console.log(error.error["message"]);
        console.log(error.error.status);
      }
    )

  }
}
