import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;
  email: string;
  title: string = 'Home';

  constructor( private router: Router) { }

  ngOnInit() {
    console.log('Process Initiated........');
  }

  submitAction(form: any) {
    // this.name = form.value.name;
    // this.email = form.value.email;
    // console.log('Name is : ', this.name, '\nEmail is : ', this.email,'\n\n\n');
    console.log('Name and Email has been submitted Successfully...................');
    this.router.navigate(['one']);
  }

}
