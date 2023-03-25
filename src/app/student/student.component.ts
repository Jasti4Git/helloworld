import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Beer } from '../beerInterface';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})


export class StudentComponent implements OnInit {

public selectedid:any;
public beers:Beer[]=[];


  constructor(private _router: Router,private _activatedRoute: ActivatedRoute,private _stdservice:StudentService) {

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


  onBeerselect(x:Beer){
    console.log('Value of beer passed'+x.id);
    this._stdservice.ShowBeerDetails(x);
    this._router.navigate(['/beer-list',x.id])
   // this._router.navigate([x.id],{relativeTo:this._activatedRoute})
      }


  isSelected(x:any){
return x.id===this.selectedid;

  }

  public studentdetials=[
{"id":1,"name":"sreemanth","grade":"A"},
{"id":2,"name":"robert","grade":"B"},
{"id":3,"name":"karim","grade":"C"}
  ];

}
