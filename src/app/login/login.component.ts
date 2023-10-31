import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    userName: '',
    password: '',
  };
  constructor(private http: HttpClient,private router: Router) {}

  submitForm() {
    // Add your form submission logic here
    console.log(this.user);
    // You can send this data to a server or perform any other action.
    const url = 'http://localhost:8080/login';

    this.http.post(url, this.user).subscribe(
      (response) => {
        console.log('Login successfully:', response);
      },
      (error) => {
        console.error('Error logging in', error);
        // Handle error response from the external service
      }
    );
  }
}
