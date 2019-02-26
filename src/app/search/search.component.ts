import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  func() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
