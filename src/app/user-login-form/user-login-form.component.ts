import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  standalone: false,
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  goToMovieCard(): void {
    this.router.navigate(['/movie-card']);
  }
  
  ngOnInit(): void { }

  loginUser(): void {
    this.fetchApiData.userlogin(this.userData).subscribe(
      (result) => {
        // store the user data and token in localstorage
        localStorage.setItem('user', result.user.Username);
        localStorage.setItem('token', result.token);

        // Close the dialog
        this.dialogRef.close();

        // Login success message
        this.snackBar.open(`Login successful! Hello ${result.user.Username}`, 'OK', {
          duration: 2000,
        });

        // Navigate to movie page
        this.router.navigate(['movies']);
      },
      (error) => {
        // Login fail message
        this.snackBar.open('Login Failed', 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
