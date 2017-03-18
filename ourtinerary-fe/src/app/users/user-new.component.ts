import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(private _tokenService: Angular2TokenService) { 
  	this._tokenService.init({
  		registerAccountPath: 'http://localhost:3002/auth'
  	});
  }

  ngOnInit() {
  }

  register() {
  	this._tokenService.registerAccount({
		email: 'test@example.com',
		password: 'password',
		passwordConfirmation: 'password'  		
	});
  }

}
