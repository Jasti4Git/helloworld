import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { beerComponent } from './beer/beer.component';
import { RouterModule,Routes } from '@angular/router';
import { BeerDetailsComponent } from './beer-details/beer-details.component';


const routes: Routes=[
  {path: '', redirectTo:'/PumpHouseMenu',  pathMatch:'full'},
  {path: 'PumpHouseMenu', component: beerComponent},
{path:'beer-list/:id',component:BeerDetailsComponent}
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