import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Trip } from './trip';

@Injectable()
export class TripService {
	private tripsUrl = 'http://localhost:3002/trips';

	constructor(
		private http: Http
	) {}

getTrips(): Observable<Trip[]> {
		return this.http.get(this.tripsUrl)
					.map((response: Response) => <Trip[]>response.json())
					.catch(this.handleError);
	}

getTrip(id: number) {
	return this.http.get(this.tripsUrl + "/" + id + '.json');
}

createTrip(trip) {
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.tripsUrl, JSON.stringify(trip), { headers: headers}).map((res: Response) => res.json());
  }

private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}