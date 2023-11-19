import { Component } from '@angular/core';
@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent {
  selectedDropdownValue?: string;
  userName?: string;

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
}
