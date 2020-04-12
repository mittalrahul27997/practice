import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  myMethod() {
    // return console.log('Hey, it is working.....');
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
