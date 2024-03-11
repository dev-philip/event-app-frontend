// import { CommonModule } from '@angular/common';
// import { ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {  Router  } from '@angular/router';
import { SharedModule } from '../../shared.module';
import { SignupService } from '../../services/signup-service/signup.service';
// import { LoginModalService } from 'src/app/services/login-modal/login-modal.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {saveJwtToken, logout, isJwtTokenExpired, getJwtToken, getJwtTokenData } from "../../utils/auth";
import { ToastrService } from 'ngx-toastr';
// import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    SharedModule, 
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent implements OnInit {

  mySignupForm: FormGroup;
  loading: boolean = false; 
  isPasswordVisible: boolean = false;

  constructor(
    private signupService: SignupService,
    // private loginModalService: LoginModalService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    ) {
    this.mySignupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
   }


  ngOnInit() {
    
  }

  openSignInModal(){
    // this.loginModalService.openModal();
    // this.signupModalService.closeModal();
  }

  

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  closeModal() {
    // this.signupModalService.closeModal();
  }

  onSubmit() {
    if (this.mySignupForm.invalid) {
      // Form is valid, perform signup logic
      console.log("error");
      return
    } 

    this.loading = true; 

    console.error("I clicked submit button");
    // Access form values here
    const firstName = this.mySignupForm.get('firstName')?.value.toLowerCase();
    const lastName = this.mySignupForm.get('lastName')?.value.toLowerCase();
    const email = this.mySignupForm.get('email')?.value.toLowerCase();
    const password = this.mySignupForm.get('password')?.value;

    alert(firstName + lastName + email + password);

    // Call a function to send data to the backend
    // this.signupService.register(firstName, lastName, email, password).subscribe(
    //   (response) => {
    //     console.log('Post successful:', response);
    //     this.loading = false;

    //     //route user to another place
    //     // this.openSignInModal();
    //     // if (signupSuccess) {
    //     //   this.router.navigate(['/home']);
    //     // }
    //     this.router.navigate(['/login']);
    //     // Perform any additional actions on successful response if needed
    //   },
    //   (error) => {
    //     console.error('Error posting data:', error);
    //     // Handle error if needed
    //   }
    // ).add(() => {
    //   this.loading = false; // Set loading back to false after the request (regardless of success or error)
    // });

    this.signupService.register(firstName, lastName, email, password).subscribe({
      next: (response) => {
        // Handle successful response here
        console.log('Post successful:', response);
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



