import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { response } from 'express';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MatDateFormats } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {
  movies: any[] = []; //movie lists from server
  filteredMovies: any[] = []; // Filtered List of movies 
  selectedGenre: string = ''; // Selected genre
  favoriteMovies: string[] = [];
  userName: string = '';

  constructor(
    public fetchApiData: FetchApiDataService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getMovies();
    // this.getFavoriteMovie();
  }

  // used to fetch the movies from FetchApiDataService 
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.filteredMovies = [...this.movies];
      return this.movies;
    });
  }

  // Log Out 
  logout(): void {
    localStorage.removeItem('user');
    alert('You have been logged out successfully.');
    this.router.navigate(['/welcome']);
  }

 
  // Go to User Profile View
  OpenUserProfile(): void {
    this.dialog.open(UserProfileComponent, {
      width: '280px'
    });
  }


  // Show Info
  toggleInfo(movie: any, type: string): void {

    // show only clicked one
    if (type === 'genre') {
      movie.showGenre = !movie.showGenre;
      movie.showDirector = false;
      movie.showSynopsis = false;
    } else if (type === 'director') {
      movie.showDirector = !movie.showDirector;
      movie.showGenre = false;
      movie.showSynopsis = false;
    } else if (type === 'synopsis') {
      movie.showSynopsis = !movie.showSynopsis;
      movie.showGenre = false;
      movie.showDirector = false;
    }
  }


  toggleFavorite(movie: any): void {
    if (this.isFavorite(movie._id)) {
      this.deleteFavorite(movie);
    }
    else {
      this.addFavorite(movie);
    }
  }


  // Add favorite movies
  addFavorite(movie: any): void {
    this.fetchApiData.addFavoriteMovie(movie.Title).subscribe(
      (resp: any) => {
        // Add the newly added movie to the favoriteMovies array
        this.favoriteMovies.push(movie._id);
        console.log('Movie added to favorites:', resp);
      },
      (error: any) => {
        console.error('Error adding movie to favorites:', error);
      }
    );
  }

  // remove favorite movies
  deleteFavorite(movie: any): void {
    this.fetchApiData.deleteFavoriteMovie(movie.Title).subscribe(
      (resp: any) => {
        this.favoriteMovies = this.favoriteMovies.filter(id => id !== movie._id);

      },
      (error: any) => {
        console.error('Error removing movie from favorites:', error);
      }
    );
  }


  isFavorite(movieId: string): boolean {
    return this.favoriteMovies.includes(movieId);
  }

}