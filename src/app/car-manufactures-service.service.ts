import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import  {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarManufacturesServiceService {

  private url="https://pic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json";

  constructor(private _http:HttpClient) { }

  getCarManufactures() {  

    return this._http.get(this.url).pipe(catchError(this.errorHandler));


    }


    errorHandler(error : HttpErrorResponse){

        return throwError(error.message || "Unknown Server Error");

      //return throwError(() => error);  
     // return throwError(error.message || "Unknown Server Error");
    }

  }

