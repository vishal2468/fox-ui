import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  selectedDropdownValue?: string;
  userName?: string;

  constructor(private http: HttpClient) {}

  onDropdownValueChange(value: string): void {
    this.selectedDropdownValue = value;
  }

  onSubmit(): void {
    // Handle form submission logic here
    console.log('Form submitted:', {
      selectedDropdownValue: this.selectedDropdownValue,
      userName: this.userName,
    });
  }
  onOAuthButtonClick(): void {
    // Call your external OAuth API here
    const oauthApiUrl = 'your_oauth_api_url';

    this.http.get(oauthApiUrl).subscribe(
      (response) => {
        // Handle the OAuth API response
        console.log('OAuth API response:', response);
      },
      (error) => {
        // Handle errors
        console.error('Error calling OAuth API:', error);
      }
    );
  }
}
