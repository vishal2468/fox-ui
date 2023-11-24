// dropdown.component.ts
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DoctorsListService } from '../doctors-list.service';

@Component({
  selector: 'doctor-dropdown',
  templateUrl: './doctor-dropdown.component.html',
  styleUrls: ['./doctor-dropdown.component.css'],
})
export class DoctorDropdownComponent implements OnInit {
  @Output() selectedValueChange = new EventEmitter<string>();

  dropdownValues: any[] = [];
  selectedValue!: string;

  constructor(private dataService: DoctorsListService) {}

  ngOnInit(): void {
    this.dataService.getDropdownValues().subscribe((values) => {
      this.dropdownValues = values;
    });
  }

  onValueChange(): void {
    this.selectedValueChange.emit(this.selectedValue);
  }
}
