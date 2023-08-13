import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchedBeer:string="";
  constructor() { }

  ngOnInit(): void {
  }

 searchvalue(event:Event){
  this.searchedBeer=(<HTMLInputElement>event.target).value;
}


}
