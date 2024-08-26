import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}
  onSubmit() {
    const { username, password } = this.registerForm.value;

    // Ensure username and password are treated as strings and are not null or undefined
    if (username && password) {
      this.authService.register(username as string, password as string).subscribe(user => {
        if (user) {
          this.router.navigate(['/login']);
        }
      });
    } else {
      // Handle the case where username or password is missing
      console.error('Username or password is missing.');
    }
  }
}
