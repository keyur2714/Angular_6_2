import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormArray } from '@angular/forms';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  inquiryForm = new FormGroup({
    name : new FormControl('',Validators.required),
    course: new FormControl('-1',Validators.required),
    mobileNo: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    hobbies: new FormArray([new FormControl('')])     
  });

  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(this.inquiryForm);
    if(this.inquiryForm.valid){
      console.log(this.inquiryForm.value);
      console.log(this.inquiryForm.get('name').value);
      console.log(this.inquiryForm.get('course').value);
      console.log(this.inquiryForm.get('mobileNo').value);
      console.log(this.inquiryForm.get('email').value);
      console.log(this.inquiryForm.get('hobbies').value);
    }
  }

  updateValidations():void{
    console.log(this.inquiryForm.get('course').value);
    if(this.inquiryForm.get('course').value === 'ANGULAR' ){
      console.log(this.inquiryForm.get('course').value);
      this.inquiryForm.get('mobileNo').clearValidators();
      this.inquiryForm.controls['mobileNo'].updateValueAndValidity()
    }
  }

  addHobby():void{
    let hobbyControl = new FormControl('');
    (<FormArray>this.inquiryForm.controls['hobbies']).push(hobbyControl);
  }
}
