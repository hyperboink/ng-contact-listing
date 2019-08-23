import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  _authService = this.authService;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {  }

  logoutUser(){
    this.authService.logout().then(res => {
      this.router.navigate(['/login']);
    });
  }

}
