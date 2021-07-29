import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

import { UserProfileDeleteComponent } from '../user-profile-delete/user-profile-delete.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

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
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  // Get user profile.
  getUserData(): void {
    const username: any = localStorage.getItem('username');
    this.fetchApiData.getUser(username).subscribe((resp: any) => {
      this.user = resp;
      this.userData = this.user;
      this.userData.birthday = this.user.birthday.slice(0, 10);
    });
  }

  // Edit user profile.
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

  // Delete user profile.
  openDeleteUserDialog(): void {
    this.dialog.open(UserProfileDeleteComponent);
  }
}
