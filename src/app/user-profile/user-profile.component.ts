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

  constructor(
    private fetchApiData: FetchApiDataService,
    private router: Router) { }

  ngOnInit(): void {
    const username = localStorage.getItem('username');

    if (username) {
      this.fetchApiData.getUser(username).subscribe(
        (data) => {
          this.userData = data;
          this.updatedUserData = { ...data };
        },
        (error) => {
          console.error('Error fetching user data', error)
        }
      );
    } else {
      console.error('User is not logged in!');
    }
  }

  // Update user profile
  updateUserProfile(): void {
    const username = localStorage.getItem('username');

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
}
