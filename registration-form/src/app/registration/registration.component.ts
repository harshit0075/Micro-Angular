import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {


  userData: { username: string, email: string, password: string } = { username: '', email: '', password: '' };
  confirmPassword: string = '';




submitForm() {
  console.log('Form submitted:', this.userData);
}

}
