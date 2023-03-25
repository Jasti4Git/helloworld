import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollment',
  template: `
    <p>
      enrollment works with {{name}}
    </p>
  `,
  styles: [
  ]
})
export class EnrollmentComponent implements OnInit {

  public name="Interpolation";
  constructor() { }

  ngOnInit(): void {
  }

}
