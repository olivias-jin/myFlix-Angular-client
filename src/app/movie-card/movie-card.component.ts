import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { response } from 'express';


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

  // Go to User Profile View
  goToUserProfile(): void {
    this.router.navigate(['/user-profile']);
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

      this.deleteFavorite(movie._id);
    }
    else {
      this.addFavorite(movie._id);
    }
  }


  // // Get favorite movies
  // getFavoriteMovie(): void {
  //   this.fetchApiData.getFavoriteMovie(this.userName).subscribe((resp: any) => {
  //     (
  //       this.favoriteMovies = resp.favoriteMovies); // Store only IDs
  //   },
  //     (error) => {
  //       console.error('Error fetching favorite movies:', error);
  //     }
  //   );
  // }

  // Add favorite movies
  addFavorite(movie: any): void {
    this.fetchApiData.addFavoriteMovie(movie._id).subscribe(
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
    this.fetchApiData.deleteFavoriteMovie(movie._id).subscribe(
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