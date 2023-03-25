import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  public name:any;
  public courseid: number=10;
public  arrTuple : [number,Boolean]=[1, true];  

  constructor(private _activatedRoute: ActivatedRoute,private _router: Router) { }

  ngOnInit() {
  this._activatedRoute.paramMap.subscribe((params: ParamMap) =>{
      let id=parseInt(params.get('id')||'');
      this.courseid=id;
    });
  }


  onPrevious(){
    let previous=this.courseid-1;
    this._router.navigate(['/studentdetails',previous])


  }

  goBack(){

    let selectedId=this.courseid;
    this._router.navigate(['../',{id:selectedId}],{relativeTo:this._activatedRoute})


  }


  showFee(){

    this._router.navigate(['fee'],{relativeTo:this._activatedRoute})


  }


}
