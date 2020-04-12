import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  logout() {
    if (localStorage.getItem('loginToken')) {
      this.auth.logout();
    }
  }

  deleteAccount() {
    if (localStorage.getItem('userToken')) {
      this.auth.deleteUser();
    } else {
      alert('User does not exist !!!');
    }
  }

}
