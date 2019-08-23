import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  email: string;
  password: string;
  isLoading: boolean;
  message: string;
  isError: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/']);
    }
  }

  loginUser(){
    
    this.authService.login(this.email, this.password).then(res => {

      if(res){
        this.isLoading = false;
        this.isError = false;
        this.router.navigate(['/']);
      }
      
    }, error => {
      if(error){
        this.isLoading = false;
        this.isError = true;
        this.router.navigate(['/login']);
      }
      
    });
  }
  
  googleLogin(){
    this.authService.loginWithGoogle().then(res => {
      this.router.navigate(['/']);
    }, error => {
      this.router.navigate(['/login']);
    });
  }

}
