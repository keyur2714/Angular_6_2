import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  empId : string = '';

  constructor(private activatedRoute: ActivatedRoute,private location:Location) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      (params)=>{
        console.log(params);
        this.empId = params.get("empId");
      }
    )
  }

  back(){
    this.location.back();
  }
}
