import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLogin(Form: NgForm) {
    if (Form.invalid) {
      return;
    }
    // this.postsService.addPosts(Form.value.title, Form.value.content);
    Form.resetForm();
  }

  func() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  func1() {
    this.router.navigate([parent]);
    this.router.navigate(['/login']);
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
