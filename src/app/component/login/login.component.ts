import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Login } from 'src/app/model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: Login = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.auth.login(this.formLogin).subscribe({
      next: (response: any) => {
        console.log(response);
        localStorage.setItem('token', response.authenticationToken);
        localStorage.setItem('username', response.username);
        this.router.navigate(['/home']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
