import { Routes } from '@angular/router';
import { LoginPageComponent } from '../app/pages/login-page/login-page.component';
import { SignupPageComponent } from '../app/pages/signup-page/signup-page.component';
import { EventListPageComponent } from '../app/pages/event-list-page/event-list-page.component';
import { ProfilePageComponent } from '../app/pages/profile-page/profile-page.component';

import { ForgetPasswordPageComponent } from '../app/pages/forget-password-page/forget-password-page.component';
import { ResetPasswordPageComponent } from '../app/pages/reset-password-page/reset-password-page.component';
import { UniversityPageComponent } from '../app/pages/university-page/university-page.component';
import { RsoPageComponent } from '../app/pages/rso-page/rso-page.component';
import { ErrorPageComponent } from '../app/pages/error-page/error-page.component';


export const routes: Routes = [
    { path: '', component: EventListPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'events', component: EventListPageComponent },
    { path: 'profile', component: ProfilePageComponent },
    { path: 'forgetpassword', component: ForgetPasswordPageComponent },
    { path: 'resetpassword', component: ResetPasswordPageComponent },
    { path: 'university', component: UniversityPageComponent },
    { path: 'rso', component: RsoPageComponent },
    { path: '**', component: ErrorPageComponent },
    // path: '**', redirectTo: '' } // Redirect to home if no matching route found
  ];
