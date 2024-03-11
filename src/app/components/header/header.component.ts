import { Component } from '@angular/core';
// import { RouterLink } from '@angular/router';
import {  Router  } from '@angular/router';
import { SharedModule } from '../../shared.module';
import {saveJwtToken, logout, isJwtTokenExpired, getJwtToken, getJwtTokenData } from "../../utils/auth";
import { Store } from '@ngrx/store';
import { AppState } from '../../states/app.state';
import { selectUser } from '../../states/user/user.selector';
import { removeLoginUserFromSTate } from '../../states/user/user.actions';
import { AsyncPipe } from '@angular/common';
import moment from 'moment'; 

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SharedModule,
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  user$ = this.store.select(selectUser);
  isLoggedIn = false;
  joinDate = "";

  constructor(
    private router: Router,
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    this.store.select(selectUser).subscribe(user => {
      // Check if user data indicates the user is logged in
      this.isLoggedIn = !!user && !!user.email;
      if(this.isLoggedIn){
        this.joinDate = moment(user.created_at).format('MMMM DD, YYYY');
      }
    
    });
  }


  logOutAUser(): void{
    this.store.dispatch(removeLoginUserFromSTate());
    logout();
    this.router.navigate(['/login']);
  }

}
