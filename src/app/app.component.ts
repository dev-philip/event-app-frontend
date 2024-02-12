import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { LoginPageComponent } from "./pages/login-page/login-page.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LoginPageComponent]
})
export class AppComponent {
  title = 'event-app-frontend';
  myVariable = 'Hello, World!'; // New variable

   apiUrl = environment.apiUrl;

}




