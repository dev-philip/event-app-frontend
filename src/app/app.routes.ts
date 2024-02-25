import { Routes } from '@angular/router';
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { SignupPageComponent } from '../app/pages/signup-page/signup-page.component';
import { EventListPageComponent } from '../app/pages/event-list-page/event-list-page.component';

export const routes: Routes = [
    { path: '', component: EventListPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'events', component: EventListPageComponent },
    { path: '**', redirectTo: '' } // Redirect to home if no matching route found
  ];
