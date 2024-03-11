// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
// import { RouterLink } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../states/app.state';
import { selectCount } from '../../states/counter/counter.selector';
import { AsyncPipe } from '@angular/common';
import { increment, decrement, reset } from '../../states/counter/counter.actions';
import {saveJwtToken, logout, isJwtTokenExpired, getJwtToken, getJwtTokenData } from "../../utils/auth";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login-service/login.service';

import { Router } from '@angular/router';
import { addLoginUserToState } from '../../states/user/user.actions';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    SharedModule,
    AsyncPipe,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  count$: Observable<number>;

  myLoginForm: FormGroup;
  isPasswordVisible: boolean = false;
  loading = false; // Add loading flag
  loginSuccess = false; // Add loading flag

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private loginService: LoginService,
    // private signupModalService: SignupModalService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
    ){
    this.count$ = this.store.select(selectCount);

    this.myLoginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  increment(){
    this.store.dispatch(increment())
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }


  getTokens  () {
    console.log(getJwtToken());
    this.toastr.success('Hello world!', 'Toastr fun!');
 }

 logOut  () {
    console.log(logout());
 }

  checkExpired  () {
    console.log(isJwtTokenExpired());
    // this.toastr.error("message");
    this.toastr.error('everything is broken', '', {
      closeButton: true,
    });
  }

  checkTokenData  () {
    this.toastr.success("Check data");
    console.log(getJwtTokenData());
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }


  closeModal() {
    // this.loginModalService.closeModal();
  }

  openSignupModal(){
    // this.loginModalService.closeModal();
    // this.signupModalService.openModal();
  }


  onSubmit() {

    if (this.myLoginForm.invalid) {
      // Form is valid, perform signup logic
      console.log("error validation");
      return
    } 

    // Set loading to true
    this.loading = true;

    // Access form values here
    const email = this.myLoginForm.get('email')?.value;
    const password = this.myLoginForm.get('password')?.value;


    this.loginService.logIn(email, password).subscribe({
      next: (response) => {
        // Handle successful response here
        console.log('Post successful:', response);
        // console.log(response.token.accessToken);
        // this.router.navigate(['/login']);

        if(response.status){  //if true
          this.toastr.success(response.message);
          saveJwtToken(response.token.accessToken);
          this.loginSuccess = true;

          // const userData = {
          //   firstName: 'John',
          //   lastName: 'Doe',
          //   email: 'john@example.com',
          //   user_level: 'admin',
          //   created_at: '2022-03-10'
          // };

          const userData = getJwtTokenData().username; 
          this.store.dispatch(addLoginUserToState({ user: userData }));
          localStorage.setItem('currentUser', JSON.stringify(userData));
          this.router.navigate(['/profile']);
          // this.closeModal();
        }else{
          this.toastr.error(response.message);
        }
      },
      error: (error) => {
        console.error('Error posting data:', error);
      },
      complete: () => {
        this.loading = false; // Set loading back to false after the request (regardless of success or error)
      }
    });
  
  }


}


// After successful login, store user data in session storage
//localStorage.setItem('currentUser', JSON.stringify(user));

// Upon page load, retrieve user data from session storage
//const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// When the user logs out, remove user data from session storage
//localStorage.removeItem('currentUser');
