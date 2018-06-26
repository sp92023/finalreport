import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { GoogleAuthService } from '../../shared/google-auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private router: Router,
    private googleAuthService: GoogleAuthService
  ) {
  }

  ngOnInit() {

  }

  signInWithGoogle(): void {
    this.googleAuthService.signInWithGoogle();
  }

}
