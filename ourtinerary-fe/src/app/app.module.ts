import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Angular2TokenService } from 'angular2-token';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { TripsComponent } from './trips/trips.component';
import { TripNewComponent } from './trips/trip-new.component';
import { TripShowComponent } from './trips/trip-show.component';
import { TripService } from './trips/trip.service';
import { UsersComponent } from './users/users.component';
import { UserNewComponent } from './users/user-new.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    TripsComponent,
    TripNewComponent,
    TripShowComponent,
    UsersComponent,
    UserNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    Angular2TokenService,
    TripService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
