import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { Register } from '../model/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: Login) {
    return this.http.post(`http://localhost:9091/api/auth/login`, login);
  }

  register(register: Register) {
    return this.http.post(`http://localhost:9091/api/auth/register`, register);
  }
}
