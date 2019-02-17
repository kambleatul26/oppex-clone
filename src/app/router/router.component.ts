import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {
  title = 'project1';
  name = 'hAri';
  months = ['january', 'february', 'march', 'april', 'may', 'june'];
  isAvailable = 'true';
  month = 'j';
  num = [[1, 2, 3], [4, 5, 6]];

  constructor(private router: Router, private route: ActivatedRoute) { }
  data;
  ngOnInit() {

    this.data = this.route.snapshot.paramMap.get('data');
  }
  loadsome() {
    this.router.navigate(['router', 'Hii Scope']);
  }
}
