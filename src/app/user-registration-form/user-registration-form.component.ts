import { Component, OnInit, Input } from '@angular/core';

// Server-side API calls
import { FetchApiDataService } from '../fetch-api-data.service';

// Service for displaying snack-bar notifications.
import { MatSnackBar } from '@angular/material/snack-bar';
// Reference to a dialog opened via the MatDialog service.
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss'],
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = {
    name: '',
    lastName: '',
    birthday: '',
    country: '',
    email: '',
    username: '',
    password: '',
  };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  // Send the form inputs to the Server-side.
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      // Registration successful.
      () => {
        this.dialogRef.close();
        this.snackBar.open('Successful registration! Welcome aboard!', 'OK', {
          duration: 3000,
        });
      },
      // Registration unsuccessful.
      (response) => {
        console.log(response);
        this.snackBar.open(response, 'OK', {
          duration: 3000,
        });
      }
    );
  }
}
