// doctor-dashboard.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { HealthApiService } from '../health-api.service';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css'],
})
export class DoctorDashboardComponent {
  result: any;
  selectedPatient!: string;
  selectedParameter!: string;
  patientsDropdown: any
  healthParameters: any
  ngOnInit() {
    this.patientsDropdown = ["p1", "p2"]
    this.healthParameters = ["bp","heartrate"]
  }

  constructor(private healthApiService: HealthApiService) { }

  @Output() patientSelected = new EventEmitter<string>();

  onPatientSelected(patient: any) {
    // Assuming you have a value property in your dropdown options
    this.selectedPatient = patient;
  }

  onParameterSelected(parameter: any) {
    this.selectedParameter = parameter;
  }

  getInfo() {
    this.healthApiService.getData(this.selectedPatient, this.selectedParameter).subscribe(
      (data: any) => {
        this.result = data;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
