import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {
  title: string = 'First';

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  oneSubmit(form: any) {
    console.log('Welcome to Page One.....................\n');
    this.router.navigate(['two']);
    this.sendValue('Hello World');
  }

  sendValue(value) {
    this.userService.setBehaviorView({textVal: value});
    }

}
