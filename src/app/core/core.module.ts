import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { beerService } from '../beer.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[beerService]
})
export class CoreModule { }
