import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

const random = Math.random();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: any;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['home']);
    }
  }

  loginFunc(loginDetails: any) {
    this.loginData = loginDetails.form.value;
    if (this.validateLogin(loginDetails.form.value)) {
      const token = random.toString();
      this.auth.sendLoginToken(token);
      console.log('Welcome User.....');
      this.router.navigate(['/home']);
    } else {
      if (!this.auth.getUserToken()) {
        alert('User Does not exist !!!');
      } else {
        alert('Invalid Email or Password!');
      }
    }
    loginDetails.reset();
  }

  validateLogin(loginDetails: any) {
    if (((localStorage.getItem('email') === loginDetails.email || localStorage.getItem('username') === loginDetails.email) &&
     localStorage.getItem('password') === loginDetails.password) && this.auth.getUserToken()) {
      return true;
    } else {
      return false;
    }
  }

}
