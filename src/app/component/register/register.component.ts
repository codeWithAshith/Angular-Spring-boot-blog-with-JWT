import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { Register } from 'src/app/model/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formRegister: Register = { username: '', password: '', email: '' };

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.auth.register(this.formRegister).subscribe({
      next: (response: any) => {
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
