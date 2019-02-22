import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

}
