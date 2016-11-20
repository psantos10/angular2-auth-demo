import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class ProfileService {
	constructor(private http: Http) {}

	getProfile(){
		let headers = new Headers();
		headers.append('Content-Type', 'applicaition/json');
		let authToken = localStorage.getItem('auth_token');
		headers.append('Authorization', `Bearer ${authToken}`);

		return this.http.get('http://api.psantos.dev:3000/users', { headers }).map(res => res.json());
	}
}