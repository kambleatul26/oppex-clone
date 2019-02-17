import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  ttl = 'Harishankar';
  dec = '3.23';
  todaydate = new Date();
  jsonval = {
    name: 'Hari',
    age: '18',
    address: {
      a1: 'Mumbai',
      a2: 'Delhi'
    }
  };
  months = ['january', 'february', 'march', 'april', 'may', 'june'];

  constructor() { }

  ngOnInit() {
  }

}
