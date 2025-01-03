import { Component } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-movie-card',
  standalone: false,

  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(
    public fetchApiData: FetchApiDataService,
    private router: Router
  ) { }

  goToUserProfile(): void {
    this.router.navigate(['/user-profile']);
  }

  ngOnInit(): void {
    this.getMovies();
  }

  // used to fetch the movies from FetchApiDataService 
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

  // // Navigate to the Welcome view
  // goToWelcome() {
  //   this.router.navigate(['/']);
  // }

  // // Navigate to movie page
  // goToProfile(username:string){
  //   this.router.navigate(['/user-profile' ]);
  // }
  

}
