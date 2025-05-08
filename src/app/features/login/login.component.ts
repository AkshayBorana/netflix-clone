declare var google: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    /** To initializa Google account */
    google.accounts.id.initialize({
      client_id: '436621078818-62aufg4cqa2vhqgnlmp2a8b74gnui3sd.apps.googleusercontent.com',
      callback: (resp: any) => {},
    });

    /* To render the Sign In button by Google */
    google.accounts.id.renderButton(document.getElementById('google-btn'), {
      theme: 'filled_blue',
      size: 'large',
      shape: 'rectangle',
      width: 350,
    });
  }

  login(): void {

  }
}
