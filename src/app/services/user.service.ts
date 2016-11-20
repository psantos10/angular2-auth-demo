import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
	private loggedIn = false;

	constructor(private http: Http){
		this.loggedIn = !!localStorage.getItem('auth_token');
	}

	private extractData(res: Response){
		let body = res.json();
		return body.data || { };
	}

	private logError(err: any){
		console.log(err);
	}

	private saveJwt(jwt: string){
		if (jwt){
			//console.log(jwt['jwt']);
			localStorage.setItem('auth_token', jwt['jwt']);
			this.loggedIn = true;
		}
	}

	login (email, password) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');

		let my_data = {
			auth: {
				email: email,
				password: password
			}
		}
 
		return this.http.post('http://api.psantos.dev:3000/user_token', JSON.stringify(my_data), { headers })
			.map(res => res.json())
			.subscribe(
				(data) => this.saveJwt(data),
				(err) => this.logError(err)
			);
	}

			/*
			.map((res) => {
				console.log("Hello");
				if (res.success){
					console.log("Hello 2");
					localStorage.setItem('auth_token', res.auth_token);
					this.loggedIn = true;
				}
				console.log("HEllo 3: " + res.success);
				return res.success;
			});
			*/
	

	logout(){
		localStorage.removeItem('auth_token');
		this.loggedIn = false;
	}

	isLoggedIn(){
		return this.loggedIn;
	}
}