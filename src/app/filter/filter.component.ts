import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() All:any=0;

  @Input() Ipa:number=0;

  @Input() NonIpa:number=0;

  selectedRadioButton:String="NONIPA";

  @Output()
  filterRadioButtonSelectionChanged:EventEmitter<String>=new EventEmitter<String>();

onRadioButtonChanged(){
  //console.log('value of selectedRadioButton in onRadioButtonChanged method in filter component'+this.selectedRadioButton);
this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButton);
}

hideFilterradio:boolean=false;

}
