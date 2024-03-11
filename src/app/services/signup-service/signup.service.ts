import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  register(firstName:string, lastName: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, {
      firstName, lastName, email, password
    });
  }
}
