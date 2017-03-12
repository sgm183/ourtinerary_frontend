import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { TripsComponent } from './trips/trips.component';
import { TripNewComponent } from './trips/trip-new.component';
import { TripShowComponent } from './trips/trip-show.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomepageComponent },
	{ path: 'trips', component: TripsComponent },
	{ path: 'trips/new', component: TripNewComponent },
	{ path: 'trip/:id', component: TripShowComponent },
]

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}