import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mydatagrid',
  templateUrl: './mydatagrid.component.html',
  styleUrls: ['./mydatagrid.component.css']
})
export class MydatagridComponent implements OnInit {

  @Input()
  columnHeaderList : string[] = [];
  @Input()
  columnList : string[] = [];
  @Input()
  dataList : any[] = [];


  constructor() { }

  ngOnInit() {
  }

}
