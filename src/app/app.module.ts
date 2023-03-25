import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import {ProductsModule} from "./products/products.module"
import {CoreModule} from "./core/core.module"
import { CommonModule } from '@angular/common';



import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ResearchComponent } from './research/research.component';
import { StudentFeeDetailsComponent } from './student-fee-details/student-fee-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';







@NgModule({
  declarations: [
    StudentComponent,
    AppComponent,
    AdminComponent,
    FacultyComponent,
    EnrollmentComponent,
    StudentNotFoundComponent,
    StudentDetailsComponent,
    ResearchComponent,
    StudentFeeDetailsComponent,
    BeerDetailsComponent
    //routing
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    ProductsModule,
    CoreModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
