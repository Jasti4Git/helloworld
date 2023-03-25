import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Beer } from '../beerInterface';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,public _stdservice:StudentService) { }

  beerobj: Beer | undefined;
  myname:string="sreemanth";

  ngOnInit(): void {


    this._stdservice.OnShowDetailsClicked.subscribe((data:Beer)=>{
      this.beerobj=data;
      console.log('Value set to beer in subscribe'+this.beerobj.name);
      console.log('the emitted beer value in subscribe'+data.name)});

  }

  


}