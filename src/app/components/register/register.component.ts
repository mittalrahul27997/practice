import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
const random = Math.random();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationData: any;
  isPasswordMatch: boolean = false;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  registration(registerData: any) {
    console.log('registerData:   ', registerData, '\n\n\n\n');
    // if (registerData.form.valid) {
    //   if (this.valueCheck(registerData.form.value)) {
    //     const token = random.toString();
    if (registerData.form.valid) {
      this.valueCheck(registerData.form.value);
      if (this.isPasswordMatch) {
        const token = random.toString();
        localStorage.setItem('userToken', token);
        this.registrationData = registerData.form.value;
        console.log('registerData is :' , this.registrationData);
        localStorage.setItem('email', this.registrationData.email);
        localStorage.setItem('password', this.registrationData.password);
        localStorage.setItem('username', this.registrationData.username);
        this.router.navigate(['login']);
      } else {
        alert('Password Mismatch!');
      }
    }
  }

  valueCheck(registerData: any): boolean {
    if ( registerData.password === registerData.confirmPassword) {
      this.isPasswordMatch = true;
      return true;
    } else {
      this.isPasswordMatch = false;
      // alert('Password did not match!');
      return false;
    }
  }

}
