import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

// Server-side API calls
import { FetchApiDataService } from '../fetch-api-data.service';

// Service for displaying snack-bar notifications.
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  @Input() userData = {
    name: '',
    lastName: '',
    birthday: '',
    country: '',
    email: '',
    username: '',
    password: '',
  };

  // Store user data returned by the API call.
  user: any = [];
  // Store Favorite movies list returned by the API call.
  favoritesList: any = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  // Get user
  getUserData(): void {
    const username: any = localStorage.getItem('username');
    this.fetchApiData.getUser(username).subscribe((resp: any) => {
      this.user = resp;
      this.userData = this.user;
      this.userData.birthday = this.user.birthday.slice(0, 10);
    });
  }

  // Edit user
  openEditUserDialog(): void {
    this.fetchApiData.editUser(this.userData).subscribe(
      // Update successful.
      () => {
        this.snackBar.open(
          'Your account has been successfully updated!',
          'OK',
          {
            duration: 3000,
          }
        );
      },
      // Update unsuccessful.
      (response) => {
        console.log(response);
        this.snackBar.open(response, 'OK', {
          duration: 3000,
        });
      }
    );
  }

  // Delete user
  openDeleteUserDialog(): void {
    const username: any = localStorage.getItem('username');

    this.fetchApiData.deleteUser(username).subscribe(
      // Delete successful.
      () => {
        /*
          The server returns a code 200 error. The delete request arrives
          successfully, but returns an error (common in Angular).
        */
        console.log('Error Status Code: 200, Error Body: [object Object]');
      },
      // Delete unsuccessful.
      () => {
        this.snackBar.open('The account was successfully deleted.', 'OK', {
          duration: 3000,
        });
        localStorage.removeItem('username');
        localStorage.removeItem('token');

        this.router.navigate(['']);
      }
    );
  }
}
