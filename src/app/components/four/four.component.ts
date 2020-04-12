import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss']
})
export class FourComponent implements OnInit {
  title: string = 'Fourth';
  @ViewChild('value') value: any;

  constructor( private router: Router ) { }
  nextPage;

  ngOnInit() {
  }

  fourFunction(next: string) {
    this.nextPage = next;
    console.log('nextPage ; ', this.nextPage, '\n\nValue accepted: ', this.value);
  }

}
