import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component'; // UserProfile

const routes: Routes = [
  { path: 'movie-card', component: MovieCardComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: '', redirectTo: '/movie-card', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
