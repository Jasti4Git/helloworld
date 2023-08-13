import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Beer } from './beerInterface';

@Injectable({
  providedIn: 'root'
})
export class beerService {

  constructor(private _http:HttpClient) { }


getBeerList(): Observable<Beer[]>{

  return this._http.get<Beer[]>('https://api.sampleapis.com/beers/ale');


}

@Output() OnShowDetailsClicked= new EventEmitter<Beer>;

ShowBeerDetails(beerobj:Beer){
  console.log('Value of beer passed in showuserdetials: '+beerobj.name);
this.OnShowDetailsClicked.emit(beerobj);
}


}
