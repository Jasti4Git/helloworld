import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student.service';
import { CarManufacturesServiceService } from '../car-manufactures-service.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[StudentService,CarManufacturesServiceService]
})
export class CoreModule { }
