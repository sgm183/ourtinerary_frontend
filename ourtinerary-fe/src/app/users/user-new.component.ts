import { Component, OnInit } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import { User } from './user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  model = new User('', '', '');
  
  constructor(private _tokenService: Angular2TokenService) { 
  	this._tokenService.init({
  		registerAccountPath: 'http://localhost:3002/auth',
      validateTokenPath: 'http://localhost:3002/auth/validate_token'
  	});
  }

  ngOnInit() {
  }

  register() {
  	this._tokenService.registerAccount({
  		email: this.model.email,
  		password: this.model.password,
  		passwordConfirmation: this.model.passwordConfirmation
	  });
  }

}
