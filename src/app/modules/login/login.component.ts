import { Component } from '@angular/core';
import { AuthService } from '../auth/services/auth.services';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      const username = form.value.username;
      const password = form.value.password;
      if (this.authService.login(username, password)) {
        this.router.navigateByUrl('/dashboard');
      } else {
        alert('username or password wrong');
      }
    }
  }
}
