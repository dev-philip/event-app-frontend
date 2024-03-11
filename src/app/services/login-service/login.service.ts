import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  logIn(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, {
      email, password
    });
  }
}
