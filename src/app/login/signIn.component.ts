import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
  styleUrls: ['./signIn.component.css'],
})
export class SignIn {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/admin']);
    } else {
      alert('Login failed');
    }
  }

  submit() {
    console.log('email', this.email, 'password', this.password);
  }
}
