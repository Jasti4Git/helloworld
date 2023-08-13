import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule,Routes } from '@angular/router';
import {CoreModule} from "./core/core.module"
import { CommonModule } from '@angular/common';



import { AppComponent } from './app.component';
import { beerComponent } from './beer/beer.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';







@NgModule({
  declarations: [
    beerComponent,
    AppComponent,
    BeerDetailsComponent,
    HeaderComponent,
    FilterComponent,
    SearchComponent
    //routing
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
