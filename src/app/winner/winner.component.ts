import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.css']
})
export class WinnerComponent implements OnInit {

  func() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
