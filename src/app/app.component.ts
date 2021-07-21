import { Component } from '@angular/core';

import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myvhs-client-a';

  constructor(public dialog: MatDialog) {}

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

  // Open all movies dialog when "All movies" button is clicked.
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
      width: '500px',
    });
  }
}
