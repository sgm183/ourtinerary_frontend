import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { TripService } from './trip.service';
import { Trip } from './trip';


@Component({
	moduleId: module.id,
	selector: 'app-trip-show',
	templateUrl: './trip-show.component.html',
	styleUrls: ['./trip-show.component.css'],
	providers: [ TripService ]
})
export class TripShowComponent implements OnInit {
	constructor(
		private http: Http,
		private tripService: TripService,
		private route: ActivatedRoute
	) {}

	@Input()
	trip: Trip;

	ngOnInit(): void {
		let tripRequest = this.route.params
			.flatMap((params: Params) => 
				this.tripService.getTrip(+params['id']));
		tripRequest.subscribe( response => this.trip = response.json());
	}

}
