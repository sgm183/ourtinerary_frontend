import { Component, OnInit } from '@angular/core';
import { Trip } from './trip';

@Component({

	moduleId: module.id,
	selector: 'app-trip-new',
	templateUrl: './trip-new.component.html',
	styleUrls: ['./trip-new.component.css']
})
export class TripNewComponent implements OnInit {

	trip = new Trip;

	ngOnInit() {
  }

}
