import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StudentService } from '../student.service';
import { CarManufacturesServiceService } from '../car-manufactures-service.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  @Input() public fromparent: any;
  @Output() public sendToParent=new EventEmitter();

  public ngifBoolParamter=false;
  public idForPropertyBinding=123;
  public addColorWithClassBinding="textcolor";
  public paramenterforTwoWayBinding="";
  public students: any;
  public carManufactureres: any;
  public errMsg: any;


   
  constructor(private _stdService:StudentService,private _carService:CarManufacturesServiceService) {}

  ngOnInit(){
   //this.students=this._stdService.getStudents();

  this._stdService.getStudents().subscribe(data=>this.students=data);
  this._carService.getCarManufactures().subscribe(data=>this.carManufactureres=data,error=>this.errMsg=error);
  



  }
onClick()
{
this.sendToParent.emit('This is from child admin');
}


}
