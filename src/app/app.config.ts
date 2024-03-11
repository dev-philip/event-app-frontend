import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient } from '@angular/common/http';

// States
import { counterReducer } from './states/counter/counter.reducer';
import { userReducer } from './states/user/user.reducer';

// end of states
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration(),
    provideStore(),
    provideState({ 
      name: "counter", 
      reducer: counterReducer,
    }),
    provideState({ 
      name: "user", 
      reducer: userReducer,
    }),
    provideAnimations(), // required animations providers
    provideToastr(), // Toastr providers
]
};
