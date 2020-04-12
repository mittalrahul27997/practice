import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {
  title: string = 'Second';
  acceptedValue: string;

  constructor( private router: Router, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getBehaviorView().subscribe(res => {
      this.userService = res.textVal;
      this.acceptedValue = res.textVal;
      console.log(res.textVal);
      });
  }

}
