import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';

@Component({
	moduleId: module.id,
	selector: 'app-trips',
	templateUrl: './trips.component.html',
	styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {

  tripOne: Trip = new Trip(1, 'Trip Name 1', 'Trip Destination 1')
  tripTwo: Trip = new Trip(2, 'Trip Name 2', 'Trip Destination 2')
  tripThree: Trip = new Trip(3, 'Trip Name 3', 'Trip Destination 3')

  trips: Trip[] = [this.tripOne, this.tripTwo, this.tripThree]

  ngOnInit() {
  }

}
