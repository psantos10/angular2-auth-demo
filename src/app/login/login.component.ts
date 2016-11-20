import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	loading = false;
	model: any = {};

  constructor(private userService: UserService, private router: Router) { }

  onSubmit(){
  	this.loading = true;
  	this.userService.login(this.model.email, this.model.password);

/*
  	.subscribe((result) => {
  		console.log(result.toString());
  		if (result){
  			console.log("I am here 1");
  			this.router.navigate(['']);
  		}

  		if(!result){
  			console.log("I am here 2");
  			this.router.navigate(['login']);
  			this.loading = false;
  		}
  	}); */
  }

  ngOnInit() {
  }

}
