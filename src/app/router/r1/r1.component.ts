import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-r1',
  templateUrl: './r1.component.html',
  styleUrls: ['./r1.component.css']
})
export class R1Component implements OnInit {
  title = 'project1';
  name = 'hAri';
  months = ['january', 'february', 'march', 'april', 'may', 'june'];
  isAvailable = 'true';
  month = 'j';
  num = [[1, 2, 3], [4, 5, 6]];
  constructor() { }

  ngOnInit() {
  }

}
