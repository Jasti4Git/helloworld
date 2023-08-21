import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Beer } from '../beerInterface';
import { beerService } from '../beer.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,public _stdservice:beerService) {

   }

 
  myname:string="anil";
  beerobj:Beer|undefined;
  beername:string="";

  ngOnInit(): void {

     this.displayDetails();

  }


displayDetails(){
  this._stdservice.OnShowDetailsClicked.subscribe((data:Beer)=>{
    this.beerobj=data;
    this.beername=data.name;
     // console.log('Value set to beer in subscribe: '+beerobj.name);
     console.log('the emitted beer value in subscribe: '+data.name)
  //  return {name:this.beerobj.name, price: this.beerobj.price}
 }
     );
}



}