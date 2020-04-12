import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  sendLoginToken(token: string) {
    localStorage.setItem('loginToken', token);
  }

  getLoginToken() {
    return localStorage.getItem('loginToken');
  }

  sendUserToken(token: string) {
    localStorage.setItem('userToken', token);
  }

  getUserToken() {
    return localStorage.getItem('userToken');
  }

  isLoggedIn() {
    return localStorage.getItem('loginToken') !== null;
  }

  logout() {
    localStorage.removeItem('loginToken');
    this.router.navigate(['/']);
  }

  deleteUser() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
