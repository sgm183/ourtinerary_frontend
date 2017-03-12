import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Trip } from './trip';


@Component({
	moduleId: module.id,
	selector: 'app-trip-show',
	templateUrl: './trip-show.component.html',
	styleUrls: ['./trip-show.component.css']
})
export class TripShowComponent implements OnInit {

	id: number;
	routeId: any;

	constructor(
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.routeId = this.route.params.subscribe(
			params => {
				this.id = +params['id'];
			}
		)
  }

}
