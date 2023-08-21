import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { beerService } from './beer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[beerService]

})


export class AppComponent {
  public msg: any;
  public name="sreemanth";
  public parentParameter="I am from parent";

  title = 'welcome Jasti';


  //latha solution
  constructor(private route:ActivatedRoute){}

  isBRDDetailsActivated():boolean{
  return this.route.snapshot.routeConfig?.path?.includes('beer-list')??false;
  //
  
  
  }


}



