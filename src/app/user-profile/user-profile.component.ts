import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router';
import { response } from 'express';
import { error } from 'console';

@Component({
  selector: 'app-user-profile',
  standalone: false,

  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  userData: any = { // Initialize with an empty object or existing data
    Username: '',
    Password: '',
    Email: '',
    Birthday: ''
  };
  updatedUserData: any = {}; //hold the updated user data for editing
  favoriteMovies: any[] = []; // Declare the favoriteMovies array here
  movies: any[] = []; // Declare movies array to store all movies

  constructor(
    private fetchApiData: FetchApiDataService,
    private router: Router) { }


  ngOnInit(): void {
    const username = localStorage.getItem('user');

    if (username) {
      this.fetchApiData.getUser(username).subscribe(
        (data) => {
          this.userData = data.find((u: any) => u.Username === username);
          this.updatedUserData = { ...this.userData };
        },
        (error) => {
          console.error('Error fetching user data', error)
        }
      );
    } else {
      console.error('User is not logged in!');
    }

    // Fetch all movies to display in favorites
    this.fetchApiData.getAllMovies().subscribe(
      (movies) => {
        this.movies = movies;
        console.log('Movies fetched:', this.movies);
        this.loadFavoriteMovies(); // Load favorite movies after movies are fetched
      },
      (error) => {
        console.error('Error fetching movies', error);
      }
    );
  }
  
  // Update user profile
  updateUserProfile(): void {
    const username = localStorage.getItem('user');

    if (username) {
      this.fetchApiData.editUser(username, this.updatedUserData).subscribe(
        (response) => {
          console.log('User profile updated successfully!', response);
        },
        (error) => {
          console.error('Error updating user profile', error);
        });
    } else {
      console.error('User is not logged in!')
    }
  }

  // Navigate to Movie Card
  goToMovieCard(): void {
    this.router.navigate(['/movie-card']);
  }

  // Navigate to Welcome Page (Log Out)
  goToWelcomePage(): void {
    this.router.navigate(['/welcome-page']);
  }

  // Log Out 
  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/welcome-page']);
  }

  // 로그인 상태 확인 (토큰이 있으면 로그인 상태로 간주)
  isAuthenticated(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  // Load favorite movies from localStorage
  loadFavoriteMovies(): void {
    const storedFavorites = localStorage.getItem('isFavorite');
    if (storedFavorites) {
      try {
        this.favoriteMovies = JSON.parse(storedFavorites);
        console.log('Favorite Movies loaded from localStorage:', this.favoriteMovies);
      } catch (error) {
        console.error('Error parsing favorite movies from localStorage:', error);
      }
    } else {
      console.log('No favorite movies found in localStorage');
    }
  }

    // Get details of favorite movies
    getFavoriteMoviesDetails() {
      console.log('Getting favorite movie details', this.favoriteMovies);
      return this.favoriteMovies.map((movieId: number) => {
        const movie = this.movies.find(m => m.id === movieId || m.id === Number(movieId));
        if (!movie) {
          console.warn(`Movie with ID ${movieId} not found`);
        }
        return movie; // This should return full movie details
      }).filter(movie => movie !== undefined); // Remove any undefined values
    }
  }