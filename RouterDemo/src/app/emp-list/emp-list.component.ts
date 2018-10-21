import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    //getting path parameters using params
    this.activatedRoute.params.subscribe(
      (param)=>{
        console.log(param);
        console.log(param.id);
        console.log(param.name);
      }
    )
    //getting path parameters using paramsMap
    this.activatedRoute.paramMap.subscribe(
      (paramMap)=>{
        console.log(paramMap);
        console.log(paramMap.keys);
        console.log(paramMap.get("id"));
        console.log(paramMap.get("name"));
      }      
    )

    //getting query parameters using queryParams
    this.activatedRoute.queryParams.subscribe(
      (queryParam)=>{
        console.log(queryParam);
        console.log(queryParam.city);
        console.log(queryParam.mobileNo);
      }
    )

    //getting query parameters using queryParamsMap
    this.activatedRoute.queryParamMap.subscribe(
      (queryParamMap)=>{
        console.log(queryParamMap);
        console.log(queryParamMap.get("city"));
        console.log(queryParamMap.get("mobileNo"));
      }
    )
  }

}
