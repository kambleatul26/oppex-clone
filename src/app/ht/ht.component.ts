import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-ht',
  templateUrl: './ht.component.html',
  styleUrls: ['./ht.component.css']
})

export class HtComponent implements OnInit {
  api: string[];
  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get('https://jsonplaceholder.typicode.com/todos/')
      .subscribe(result => {
        this.api = result as string[];
        console.log(result);
      }, error => console.log('There was an error')
      )
  }

}
