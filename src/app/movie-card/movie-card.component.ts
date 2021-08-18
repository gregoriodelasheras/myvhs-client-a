import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MovieDescriptionComponent } from '../movie-description/movie-description.component';
import { MovieGenreComponent } from '../movie-genre/movie-genre.component';
import { MovieDirectorComponent } from '../movie-director/movie-director.component';

import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  // Store the movies returned by the API call.
  movies: any[] = [];
  // Set user's username.
  username = localStorage.getItem('username');

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Fetch all movies from database
   * @returns All movies stored in the database
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      return this.movies;
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
  openGenreDialog(movieTitle: string, movieGenres: any): void {
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
  openDirectorDialog(movieTitle: string, movieDirector: any): void {
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
  toggleToWatchMovie(movieId: any, movieTitle: string): void {
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
