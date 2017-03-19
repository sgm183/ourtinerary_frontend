import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService } from 'angular2-token';
import { User } from './user';

@Component({
  selector: 'app-user-new-session',
  templateUrl: './user-new-session.component.html',
  styleUrls: ['./user-new-session.component.css']
})
export class UserNewSessionComponent implements OnInit {
  	model = new User('', '', '');

	constructor(private router: Router ,private _tokenService: Angular2TokenService) {
	  	this._tokenService.init({
	  		registerAccountPath: 'http://localhost:3002/auth',
	  		validateTokenPath: 'http://localhost:3002/auth/validate_token',
	  		signInPath: 'http://localhost:3002/auth/sign_in',
	  	});
	}

	ngOnInit() {
	}

	signIn() {
		this._tokenService.signIn({
			email: this.model.email,
			password: this.model.password
		});
		this.router.navigate(['/trips']);
	}
}
