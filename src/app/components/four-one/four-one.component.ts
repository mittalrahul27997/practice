import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four-one',
  templateUrl: './four-one.component.html',
  styleUrls: ['./four-one.component.scss']
})
export class FourOneComponent implements OnInit {
  values = 'none';
  value = 'Hello';

  constructor() { }

  ngOnInit() {
  }

  setValue() {
    this.values = 'submitted';
  }

}
