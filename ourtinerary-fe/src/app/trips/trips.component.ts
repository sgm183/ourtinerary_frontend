import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Trip } from './trip';
import { TripService } from './trip.service';

@Component({
	moduleId: module.id,
	selector: 'app-trips',
	templateUrl: './trips.component.html',
	styleUrls: ['./trips.component.css'],
  providers: [ TripService ]
})
export class TripsComponent implements OnInit {
  trips: Trip[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private tripService: TripService,
    private router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getTrips());
  };

  getTrips() {
    this.tripService.getTrips()
        .subscribe(
          trips => this.trips = trips,
          error => this.errorMessage = <any>error
        )
  }

  goToShow(trip: Trip): void {
    let link = ['/trip', trip.id];
    this.router.navigate(link);
  }

}
