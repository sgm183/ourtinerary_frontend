import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Trip } from './trip';
import { TripService } from './trip.service';

@Component({

	moduleId: module.id,
	selector: 'app-trip-new',
	templateUrl: './trip-new.component.html',
	styleUrls: ['./trip-new.component.css'],
	providers: [ TripService ]
})
export class TripNewComponent implements OnInit {

	trip = new Trip;
	submitted: boolean = false;

	constructor(
		private tripService: TripService
	) {}

	createTrip(trip) {
		this.submitted = true;
		this.tripService.createTrip(trip)
			.subscribe(
				data => { return true },
				error => {
					console.log("Error saving trip");
					return Observable.throw(error);
				}
			)
	}
	ngOnInit() {
  }

}
