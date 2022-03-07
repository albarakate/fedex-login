import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { LoginValidator } from "./login-validators";
import { ClientService } from "../../../services/client.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // We use a FormGroup
  loading = false;
  loginFormSubmitted = false;
  emailRegex = "^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$"; // Email regex to check the validity of email
  lowerAndUpperRegex = "^(?=.*[a-z])(?=.*[A-Z]).+$"; // Lower and uppercase regex for password

  constructor(private router: Router, private clientService: ClientService) {
    // Redirect to home page if the client is logged
    if (clientService.isLogged()) {
      this.router.navigate(['/home']);
    }
  }

  ngOnInit(): void {
    // Init the Form Group
    this.loginForm = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
    });

    // Set validators
    this.setValidators();
  }

  private setValidators() {

    // Define formValidators
    const formValidators = {
      "firstname": Validators.compose([
        Validators.required,
      ]),
      "lastname": Validators.compose([
        Validators.required,
      ]),
      "email": Validators.compose([
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]),
      "password": Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(this.lowerAndUpperRegex),
        LoginValidator.passwordValidation(this.loginForm.get('firstname'), this.loginForm.get('lastname'))
      ])
    }

    // Update Form Group
    this.loginForm.get("firstname")?.setValidators(
      formValidators["firstname"]
    );
    this.loginForm.get("lastname")?.setValidators(
      formValidators["lastname"]
    );
    this.loginForm.get("email")?.setValidators(
      formValidators["email"]
    );
    this.loginForm.get("password")?.setValidators(
      formValidators["password"]
    );
  }

  // Accessors
  get firstName() { return this.loginForm.get('firstname')!; }
  get lastName() { return this.loginForm.get('lastname')!; }
  get email() { return this.loginForm.get('email')!; }
  get password() { return this.loginForm.get('password')!; }

  // Handle submitted form
  submitLoginForm() {
    this.loginFormSubmitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // Loading to true- Show to the user that something is happening
    this.loading = true;

    // Call the service to login
    this.clientService.login(
      {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value
      }
    ).subscribe(
      () => {
          this.loading = false;
          this.router.navigate(['/']);
        },
        error => {
          // Error
          // Just a console.error butwe can implement a service that handles the error
          console.error('Error when trying to login :', error);
        });
  }

  onRegister() : void {
    this.router.navigate(['/client/register']);
  }
}
