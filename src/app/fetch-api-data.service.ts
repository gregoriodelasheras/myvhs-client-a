import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// API URL that provides server-side data to the client-side.
const apiUrl = 'https://myvhs.herokuapp.com/';

// Create injectable service to use this class in the DI system.
@Injectable({
  providedIn: 'root',
})
export class FetchApiDataService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // User registration (Endpoint: 'users', Method: POST).
  public userRegistration(userDetails: any): Observable<any> {
    // Send the any argument to the API endpoint and return the API response.
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  // User login (Endpoint: 'login', Method: POST).
  public userLogin(userDetails: any): Observable<any> {
    // Send the any argument to the API endpoint and return the API response.
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  // Get user (Endpoint: 'users/:username', Method: GET).
  public getUser(username: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Edit user (Endpoint: 'users/:username', Method: PUT).
  public editUser(userDetails: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .put(apiUrl + `users/${userDetails.username}`, userDetails, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Delete user (Endpoint: 'users/:username', Method: DELETE).
  public deleteUser(username: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .delete(apiUrl + `users/${username}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get Favorites list (Endpoint: 'users/:username/favorites', Method: GET).
  public getFavorites(username: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + `users/${username}/favorites`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Add movie to Favorites list (Endpoint: 'users/:username/favorites/:movie_id', Method: POST).
  public addMovieFavorites(username: any, movieId: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .post(apiUrl + `users/${username}/favorites/${movieId}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Remove movie from Favorites list (Endpoint: 'users/:username/favorites/:movie_id', Method: DELETE).
  public removeMovieFavorites(username: any, movieId: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .delete(apiUrl + `users/${username}/favorites/${movieId}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get To-Watch list (Endpoint: 'users/:username/towatch', Method: GET).
  public getToWatch(username: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + `users/${username}/towatch`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Add movie to To-Watch list (Endpoint: 'users/:username/towatch/:movie_id', Method: POST).
  public addMovieToWatch(username: any, movieId: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .post(apiUrl + `users/${username}/towatch/${movieId}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Remove movie from To-Watch list (Endpoint: 'users/:username/towatch/:movie_id', Method: DELETE).
  public removeMovieToWatch(username: any, movieId: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .delete(apiUrl + `users/${username}/towatch/${movieId}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get all movies endpoint (Endpoint: 'movies', Method: GET).
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get one movie endpoint (Endpoint: 'movies/:title', Method: GET).
  public getMovie(movieTitle: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + `movies/${movieTitle}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get genres endpoint (Endpoint: 'genres', Method: GET).
  public getGenres(): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + 'genres', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get one genre endpoint (Endpoint: 'genres/:name', Method: GET).
  public getGenre(genreName: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + `genres/${genreName}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get directors endpoint (Endpoint: 'directors', Method: GET).
  public getDirectors(): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + 'directors', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get one director endpoint (Endpoint: 'directors/:name', Method: GET).
  public getDirector(directorName: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + `directors/${directorName}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get actors endpoint (Endpoint: 'actors', Method: GET).
  public getActors(): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + 'actors', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Get one actor endpoint (Endpoint: 'actors/:name', Method: GET).
  public getActor(actorName: any): Observable<any> {
    const token = localStorage.getItem('token');

    // Pass the token in the HTTP header to the call.
    return this.http
      .get(apiUrl + `actors/${actorName}`, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
      })
      .pipe(catchError(this.handleError));
  }

  // Error handler
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error has occurred:', error.error.message);
    } else {
      console.error(
        `Error Status Code: ${error.status}, ` + `Error Body: ${error.error}`
      );
    }
    return throwError('Sorry, an error has occurred. Please try again later.');
  }
}
