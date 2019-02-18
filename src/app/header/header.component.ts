import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    // this.postsService.addPosts(Form.value.title, Form.value.content);
    Form.resetForm();
  }

  constructor() { }

  ngOnInit() {
  }

}
