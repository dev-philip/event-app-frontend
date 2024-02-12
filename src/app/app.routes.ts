import { Routes } from '@angular/router';
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { SignupPageComponent } from '../app/pages/signup-page/signup-page.component';

export const routes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: '**', redirectTo: '' } // Redirect to home if no matching route found
  ];
