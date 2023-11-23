import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorsListService {
  private apiUrl = 'http://localhost:8080/user/doctors';

  constructor(private http: HttpClient) {}

  getDropdownValues(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl);
  }
}
