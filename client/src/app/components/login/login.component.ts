import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;

    // Ensure username and password are treated as strings
    if (username && password) {
      this.authService.login(username as string, password as string).subscribe(user => {
        if (user) {
          this.router.navigate(['/']);
        }
      });
    } else {
      // Handle the case where username or password is missing
      console.error('Username or password is missing.');
    }
  }
}
