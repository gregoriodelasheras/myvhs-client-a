import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// API URL that provides server-side data to the client-side.
const apiUrl = 'https://myvhs.herokuapp.com';

@Injectable({
  providedIn: 'root',
})

// User registration (Endpoint: 'users', Method: POST).
export class UserRegistrationService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
  public userRegistration(userDetails: any): Observable<any> {
    // Send the any argument to the API endpoint and return the API response.
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError));
  }

  // Error handler.
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

// User login (Endpoint: 'login', Method: POST).
export class UserLoginService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
  public userLogin(userDetails: any): Observable<any> {
    // Send the any argument to the API endpoint and return the API response.
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  // Error handler.
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

// Get user (Endpoint: 'users/:username', Method: GET).
export class GetUserService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Edit user (Endpoint: 'users/:username', Method: PUT).
export class EditUserService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Delete user (Endpoint: 'users/:username', Method: DELETE).
export class DeleteUserService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Get Favorites list (Endpoint: 'users/:username/favorites', Method: GET).
export class GetFavoritesService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Add movie to Favorites list (Endpoint: 'users/:username/favorites/:movie_id', Method: POST).
export class AddMovieFavoritesService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Remove movie from Favorites list (Endpoint: 'users/:username/favorites/:movie_id', Method: DELETE).
export class RemoveMovieFavoritesService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Get To-Watch list (Endpoint: 'users/:username/towatch', Method: GET).
export class GetToWatchService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Add movie to To-Watch list (Endpoint: 'users/:username/towatch/:movie_id', Method: POST).
export class AddMovieToWatchService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Remove movie from To-Watch list (Endpoint: 'users/:username/towatch/:movie_id', Method: DELETE).
export class RemoveMovieToWatchService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

  // Error handler.
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

// Get all movies endpoint (Endpoint: 'movies', Method: GET).
export class GetMoviesService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

// Get one movie endpoint (Endpoint: 'movies/:title', Method: GET).
export class GetMovieService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

// Get genres endpoint (Endpoint: 'genres', Method: GET).
export class GetGenresService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

// Get one genre endpoint (Endpoint: 'genres/:name', Method: GET).
export class GetGenreService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

// Get directors endpoint (Endpoint: 'directors', Method: GET).
export class GetDirectorsService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

// Get one director endpoint (Endpoint: 'directors/:name', Method: GET).
export class GetDirectorService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

// Get actors endpoint (Endpoint: 'actors', Method: GET).
export class GetActorsService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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

// Get one actor endpoint (Endpoint: 'actors/:name', Method: GET).
export class GetActorService {
  // Inject the HttpClient module to the constructor parameters.
  constructor(private http: HttpClient) {}

  // API call.
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
