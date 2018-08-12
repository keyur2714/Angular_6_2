import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Lookup } from './lookup-model';
@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  selectedData: Lookup = new Lookup();

  @Input()
  label : string;

  @Input()
  placeHolder: string;

  @Input()
  dataList: Lookup[] = [];

  @Output("getSelectedData")
  getSelectedDataEvent = new EventEmitter<Lookup>();

  constructor() { }

  ngOnInit() {
  }

  getSelectedData():void{
    this.getSelectedDataEvent.emit(this.selectedData);
  }
}
