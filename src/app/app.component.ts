import { Component } from '@angular/core';
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

}
