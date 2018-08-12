import { Component, OnInit } from '@angular/core';
import { Country } from './country.model';
@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  selectedCountry : Country = new Country();
  countryList: Country[] = [];

  constructor() { }

  ngOnInit() {
    const country1 = new Country();
    country1.id = 11;
    country1.code = "IND";
    country1.name = "India";

    const country2 = new Country();
    country2.id = 12;
    country2.code = "US";
    country2.name = "United States";

    const country3 = new Country();
    country3.id = 13;
    country3.code = "UK";
    country3.name = "United Kindgdom";

    this.countryList.push(country1);
    this.countryList.push(country2);
    this.countryList.push(country3);
  }

  getSelectedCountry(){
    console.log(this.selectedCountry);
  }
}
