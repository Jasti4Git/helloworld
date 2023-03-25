import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[StudentService]

})


export class AppComponent {
  public msg: any;
  public name="sreemanth";
  public parentParameter="I am from parent";

  title = 'welcome Jasti';

}
