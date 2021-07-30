import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile-delete',
  templateUrl: './user-profile-delete.component.html',
  styleUrls: ['./user-profile-delete.component.scss'],
})
export class UserProfileDeleteComponent implements OnInit {
  constructor(
    public fetchApiData: FetchApiDataService,
    public router: Router,
    public snackBar: MatSnackBar
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  deleteUserProfile(): void {
    const username: any = localStorage.getItem('username');

    this.fetchApiData.deleteUser(username).subscribe(
      // Delete unsuccessful.
      () => {
        /*
          The server returns a code 200 error. The delete request arrives
          successfully, but returns an error.
        */
        console.log('Error Status Code: 200, Error Body: [object Object]');
      },
      // Delete successful.
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
