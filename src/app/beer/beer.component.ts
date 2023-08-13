import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Beer } from '../beerInterface';
import { beerService } from '../beer.service';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})


export class beerComponent implements OnInit {

public selectedid:any;
public beers:Beer[]=[];
courseCountRadioButton: String='All';
// public studentdetials=[
//   {"id":1,"name":"sreemanth","grade":"A"},
//   {"id":2,"name":"robert","grade":"B"},
//   {"id":3,"name":"karim","grade":"C"}
//     ];


onFilterRadioButtonChange(data: String){
this.courseCountRadioButton=data;
console.log('selected beer from parent: '+this.courseCountRadioButton);


}


  constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private _stdservice:beerService) {

   }



  ngOnInit(): void {

    this._stdservice.getBeerList().subscribe(data=>this.beers=data);


    this._activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      let id=parseInt(params.get('id')||'');
      this.selectedid=id;
    });
  
  }

  onselect(x: { id: any; }){
//this._router.navigate(['/studentdetails',x.id])
this._router.navigate([x.id],{relativeTo:this._activatedRoute})
  }


getAllbeers(){
  return this.beers.length;
}

  getIpaBeers(){
    return this.beers.filter(beers => beers.name.includes('IPA')).length;
  }

  getNonIpaBeers(){
    return this.beers.filter(beers => !beers.name.includes('IPA')).length;
  }

  onBeerselect(x:Beer){
    console.log('ID of beer passed: '+x.id);
    this._stdservice.ShowBeerDetails(x);
    this._router.navigate(['/beer-list',x.id])
      }


  isSelected(x:any){
return x.id===this.selectedid;

  }



}
