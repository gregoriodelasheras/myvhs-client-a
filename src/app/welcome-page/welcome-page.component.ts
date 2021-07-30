import { Component, OnInit } from '@angular/core';

import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  // Open user registration dialog when "Sign up" button is clicked.
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Set the width of the dialog window.
      width: '280px',
    });
  }

  // Open user registration dialog when "Log in" button is clicked.
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      // Set the width of the dialog window.
      width: '280px',
    });
  }
}
