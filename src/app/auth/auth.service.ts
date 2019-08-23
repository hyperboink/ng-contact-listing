import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { FormValidationService } from '../services/form-validation.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;

  constructor(private userAuth: AngularFireAuth, private router: Router, private validation: FormValidationService) {

    this.userAuth.authState.subscribe(user => {

      if(user){
        localStorage.setItem('user', JSON.stringify(user));
      }else{
        localStorage.setItem('user', null);
      }
      
      
    });

  }

  async login(email: string, password: string){
    return await this.userAuth.auth.signInWithEmailAndPassword(email, password);
  }

  isLoggedIn(){
    return JSON.parse(localStorage.getItem('user'));
  }

  async loginWithGoogle(){
    return await this.userAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  async logout(){
    let signoutUser = await this.userAuth.auth.signOut();
    localStorage.setItem('user', null);

    return signoutUser;
  }

}
