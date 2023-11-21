// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthApiService {
  private apiUrl = 'your_api_url_here';

  constructor(private http: HttpClient) {}

  getData(patient: string, parameter: string): Observable<any> {
    const params = { patient, parameter };
    return this.http.get<any>(this.apiUrl, { params });
  }
}
