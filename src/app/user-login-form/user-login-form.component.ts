import { Component, OnInit, Input } from '@angular/core';

// Server-side API calls
import { FetchApiDataService } from '../fetch-api-data.service';

// Service for displaying snack-bar notifications.
import { MatSnackBar } from '@angular/material/snack-bar';
// Reference to a dialog opened via the MatDialog service.
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss'],
})
export class UserLoginFormComponent implements OnInit {
  @Input() userData = {
    username: '',
    password: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe(
      // Login successful.
      (response) => {
        // Store current user and token in localStorage.
        localStorage.setItem('username', response.user.username);
        localStorage.setItem('token', response.token);

        this.dialogRef.close();
        this.snackBar.open(`Welcome back, ${response.user.name}!`, 'OK', {
          duration: 3000,
        });
      },
      // Login unsuccessful.
      (response) => {
        this.snackBar.open(response, 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
