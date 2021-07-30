import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(public router: Router, public snackBar: MatSnackBar) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  // Log out
  logout(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    this.snackBar.open('You have successfully logged out.', 'OK', {
      duration: 3000,
    });
    this.router.navigate(['']);
  }
}
