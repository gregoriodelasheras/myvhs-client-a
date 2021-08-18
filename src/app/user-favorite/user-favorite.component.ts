import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MovieDescriptionComponent } from '../movie-description/movie-description.component';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-favorite',
  templateUrl: './user-favorite.component.html',
  styleUrls: ['./user-favorite.component.scss'],
})
export class UserFavoriteComponent implements OnInit {
  // Store the favorites movies returned by the API call.
  movies: any[] = [];
  // Set user's username.
  username = localStorage.getItem('username');

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getFavoritesMovies();
  }

  /**
   * Fetch all movies in user's Favorites list
   * @returns All movies stored in the user's Favorites list
   */
  getFavoritesMovies(): void {
    this.fetchApiData.getFavorites(this.username).subscribe((resp: any) => {
      const favoriteMovies = resp.favoriteMovies;

      favoriteMovies.forEach((favoriteMovie: any) => {
        this.fetchApiData.getMovie(favoriteMovie).subscribe((resp: any) => {
          this.movies.push(resp);
        });
        return this.movies;
      });
    });
  }

  /**
   * Open dialog to show movie description through MovieDescriptionComponent
   * @param title
   * @param description
   */
  openDescriptionDialog(title: string, description: string): void {
    this.dialog.open(MovieDescriptionComponent, {
      data: { title, description },
      width: '400px',
    });
  }

  /**
   * Open dialog to show movie genre through MovieGenreComponent
   * @param movieTitle
   * @param movieGenres
   */
  openGenreDialog(movieTitle: any, movieGenres: any): void {
    this.fetchApiData.getGenre(movieGenres[0]).subscribe((genre: any) => {
      this.dialog.open(MovieGenreComponent, {
        data: { movieTitle, genre },
        width: '600px',
      });
    });
  }

  /**
   * Open dialog to show movie director through MovieDirectorComponent
   * @param movieTitle
   * @param movieDirector
   */
  openDirectorDialog(movieTitle: any, movieDirector: any): void {
    this.fetchApiData.getDirector(movieDirector).subscribe((director: any) => {
      this.dialog.open(MovieDirectorComponent, {
        data: { movieTitle, director },
        width: '600px',
      });
    });
  }

  /**
   * Add or remove movies from the Favorites list
   * @param movieId
   * @param movieTitle
   */
  toggleFavoriteMovie(movieId: any, movieTitle: any): void {
    this.fetchApiData.getFavorites(this.username).subscribe((resp: any) => {
      const favoriteMovies = resp.favoriteMovies;

      if (favoriteMovies.includes(movieId)) {
        this.fetchApiData
          .removeMovieFavorites(this.username, movieId)
          .subscribe(() => {
            this.snackBar.open(
              `"${movieTitle}" was removed from your Favorites list!`,
              'OK',
              {
                duration: 3000,
              }
            );
          });
      } else {
        this.fetchApiData
          .addMovieFavorites(this.username, movieId)
          .subscribe(() => {
            this.snackBar.open(
              `"${movieTitle}" was added to your Favorites list!`,
              'OK',
              {
                duration: 3000,
              }
            );
          });
      }
    });
  }

  /**
   * Add or remove movies from the To-Watch list
   * @param movieId
   * @param movieTitle
   */
  toggleToWatchMovie(movieId: any, movieTitle: any): void {
    this.fetchApiData.getToWatch(this.username).subscribe((resp: any) => {
      const toWatchMovies = resp.toWatchMovies;

      if (toWatchMovies.includes(movieId)) {
        this.fetchApiData
          .removeMovieToWatch(this.username, movieId)
          .subscribe(() => {
            this.snackBar.open(
              `"${movieTitle}" was removed from your To-Watch list!`,
              'OK',
              {
                duration: 3000,
              }
            );
          });
      } else {
        this.fetchApiData
          .addMovieToWatch(this.username, movieId)
          .subscribe(() => {
            this.snackBar.open(
              `"${movieTitle}" was added to your To-Watch list!`,
              'OK',
              {
                duration: 3000,
              }
            );
          });
      }
    });
  }
}
