import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
// pages
import { LoginPageComponent } from "./pages/login-page/login-page.component";
// components
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, LoginPageComponent, FooterComponent,HeaderComponent]
})
export class AppComponent {
  title = 'event-app-frontend';
  myVariable = 'Hello, World!'; // New variable

   apiUrl = environment.apiUrl;

}




