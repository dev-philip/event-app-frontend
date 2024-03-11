import { Component, OnInit } from '@angular/core';
import {saveJwtToken, logout, isJwtTokenExpired, getJwtToken, getJwtTokenData } from "../../utils/auth";
import { Router } from '@angular/router';
import { selectUser } from '../../states/user/user.selector';

import { AppState } from '../../states/app.state';
import { Store } from '@ngrx/store';
import { addLoginUserToState } from '../../states/user/user.actions';

import { SharedModule } from '../../shared.module';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    SharedModule,
    AsyncPipe
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})

export class ProfilePageComponent implements OnInit{

  user$ = this.store.select(selectUser);
  
  constructor(
     private router: Router,
     private store: Store<AppState>
  ){ }

  ngOnInit(): void {
    if(isJwtTokenExpired()){ //if true
      this.router.navigate(['/login']);
      return
    }

     // Fetch user data from storage
     const storedUserData = JSON.parse(localStorage.getItem('currentUser') as string);

     if (storedUserData) {
       this.store.dispatch(addLoginUserToState({ user: storedUserData }));
     }

  }

}

