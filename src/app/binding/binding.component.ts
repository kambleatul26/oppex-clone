import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  name: String;
  public myId = 'UrId';
  isDisabled = true;
  public pap = 'paper';
  public classs = {

    paper: true

  }
  public newProducts;
  public
  style = {

    color: 'blue',

  }
  myClick(event) {
    alert("Button clicked");
  }
  constructor(private studentservice: StudentService) { }
  getproduct(): void {
    this.newProducts = this.studentservice.getProducts();
  }
  ngOnInit() {
    this.getproduct();
  }


}