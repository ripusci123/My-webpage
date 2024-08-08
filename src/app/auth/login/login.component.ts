import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  errorMessage: string = '';

  onLogin() {
    if (this.emailOrPhone && this.password) {
      // Perform login logic here
      console.log('Email or Phone:', this.emailOrPhone);
      console.log('Password:', this.password);
    } else {
      this.errorMessage = 'Please enter both email/phone and password.';
    }
  }
}
