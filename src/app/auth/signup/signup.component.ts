import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html', // Link to the HTML file
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule] // Import necessary modules
})
export class SignupComponent {
  step: number = 1;
  user = {
    emailOrPhone: '',
    name: '',
    password: '',
    organizationName: '',
    designation: '',
    birthDate: '',
    city: '',
    pincode: ''
  };
  allowedOrganizations: string[] = ['Org1', 'Org2', 'Org3'];
  errorMessage: string = '';

  onSignupStep1() {
    this.step = 2;
  }

  onSignupStep2() {
    if (this.validateStep2()) {
      console.log(this.user);
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
    }
  }

  validateStep2(): boolean {
    const isOrganizationValid = this.allowedOrganizations.includes(this.user.organizationName);
    const isDesignationValid = !!this.user.designation;
    const isBirthDateValid = !!this.user.birthDate;
    const isCityValid = !!this.user.city;
    const isPincodeValid = /^\d{6}$/.test(this.user.pincode);

    return isOrganizationValid && isDesignationValid && isBirthDateValid && isCityValid && isPincodeValid;
  }
}
