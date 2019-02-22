import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
    const authData = {password: Form.value.password, username: Form.value.username};
    this.http.post('http://localhost:3000/login', authData)
    .subscribe(res => {
      console.log(res);
    });
  }

  func() {
    this.router.navigate([parent]);
    this.router.navigate(['/signup']);
  }

  func1() {
    this.router.navigate([parent]);
    this.router.navigate(['/login']);
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

}
