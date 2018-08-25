import { Component,OnInit } from '@angular/core';
import { Lookup } from './my-dropdown/lookup-model';
import { Server } from './server/server.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  countryLookupList : Lookup[] = [];
  stateLookupList : Lookup[] = [];

  selectedCountry : Lookup = new Lookup();
  selectedState : Lookup = new Lookup();

  title = 'app';
  message = "Good After noon";

  name: string = "keyur";
  revStr: string = '';

  serverHeaderList: string[] = ["Server Name","Server OS"];
  serverColumnList: string[] = ["serverName","serverOs"];
  serverList: Server[] = [
    {
      serverName : "Server 1",
      serverOs: "Windows"
    },
    {
      serverName : "Server 2",
      serverOs: "Linux"
    }
  ];

  ngOnInit(){
    const countryLookup1 = new Lookup();
    countryLookup1.id = 11;
    countryLookup1.code = "IND";
    countryLookup1.name = "India";

    const countryLookup2 = new Lookup();
    countryLookup2.id = 12;
    countryLookup2.code = "US";
    countryLookup2.name = "United States";

    const countryLookup3 = new Lookup();
    countryLookup3.id = 13;
    countryLookup3.code = "UK";
    countryLookup3.name = "United Kindgdom";

    this.countryLookupList.push(countryLookup1);
    this.countryLookupList.push(countryLookup2);
    this.countryLookupList.push(countryLookup3);


    const stateLookup1 = new Lookup();
    stateLookup1.id = 101;
    stateLookup1.code = "MH";
    stateLookup1.name = "Maharashtra";

    const stateLookup2 = new Lookup();
    stateLookup2.id = 102;
    stateLookup2.code = "GJ";
    stateLookup2.name = "Gujarat";

    const stateLookup3 = new Lookup();
    stateLookup3.id = 103;
    stateLookup3.code = "MP";
    stateLookup3.name = "Madhya Pradesh";

    this.stateLookupList.push(stateLookup1);
    this.stateLookupList.push(stateLookup2);
    this.stateLookupList.push(stateLookup3);
  }

  msgList : string[] = [
    "Good Morning...!",
    "Good Afternoon...!",
    "Good Evening...!",
    "How are you?"
  ];

  reverseStr():void{
    console.log(this.name);
    let str = this.name.split('').reverse().join("");
    this.revStr = str;
  }

  setSelectedState(state){
    this.selectedState = state;
  }

  setSelectedCountry(country){
    this.selectedCountry = country;
  }

  addServerToList(server){
    console.log("2: "+server); 
    this.serverList.push(server);   
  }
}
