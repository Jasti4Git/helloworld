import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { RouterModule,Routes } from '@angular/router';
import { ParentsComponent } from './parents/parents.component';
import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFeeDetailsComponent } from './student-fee-details/student-fee-details.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';


const routes: Routes=[
  {path: '', redirectTo:'/student-list',  pathMatch:'full'},
  {path: 'student-list', component: StudentComponent},
  {path: 'parents', component: ParentsComponent},
  {path:'student-list/:id',component: StudentDetailsComponent,
  children: [
      {path:'fee', component: StudentFeeDetailsComponent}
  ]
},
{path:'beer-list/:id',component:BeerDetailsComponent},
{path: "**", component: StudentNotFoundComponent},
];

@NgModule({ 
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutingModule { }


//export const routing=[StudentComponent]