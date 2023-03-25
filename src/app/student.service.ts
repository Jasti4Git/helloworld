import { EventEmitter, Injectable, Output } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { studentInterface } from './studentInterface';
import { Observable } from 'rxjs';
import { Beer } from './beerInterface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http:HttpClient) { }
  private _url="../assets/data/student.json";

  getStudents(): Observable<studentInterface[]>{  
//return [{"id":1, "name":"Rama"},{"id":2, "name":"Bheema"},{"id":3, "name":"Hanuman"}];

return this._http.get<studentInterface[]>(this._url);

}

getBeerList(): Observable<Beer[]>{

  return this._http.get<Beer[]>('https://api.sampleapis.com/beers/ale');


}


@Output() OnShowDetailsClicked= new EventEmitter<Beer>;

ShowBeerDetails(beerobj:Beer){
  console.log('Value of beer passed in showuserdetials'+beerobj.name);
this.OnShowDetailsClicked.emit(beerobj);
}


}
