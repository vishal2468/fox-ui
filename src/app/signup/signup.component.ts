import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    userName: '',
    email: '',
    password: '',
    active: true,
    roles:'ROLE_ADMIN'

  };
  constructor(private http: HttpClient,private router: Router) {}

  submitForm() {
    // Add your form submission logic here
    console.log(this.user);
    // You can send this data to a server or perform any other action.
    const url = 'http://localhost:8080/user/signup';

    this.http.post(url, this.user).subscribe(
      (response) => {
        console.log('Form submitted successfully:', response);
        this.router.navigate(['/login']); // Navigate to login page
        // Handle success response from the external service
      },
      (error) => {
        console.error('Error submitting form:', error);
        // Handle error response from the external service
      }
    );
  }
}
